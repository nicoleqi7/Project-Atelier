import React from "react";
import axios from 'axios';
import Overview from "./overview/Overview.jsx";
import RelatedProducts from './RelatedProduct/RelatedProducts.jsx';
import QandA from "./Q&A/QandA_app.jsx";
import RR_app from "./Ratings&Reviews/RR_app.jsx";
import Navbar from "./navbar.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productID: 64628,
            productInfo: {},
            productStyle: {},
            relatedProductsIDs: null,
            relatedProductsInfo: [],
            meta: {},
            reviews: {},
            questions: {},
        }
        this.updateProductID = this.updateProductID.bind(this);
    }

    componentDidMount() {
        this.getProductInfo(this.state.productID);
    }

    getProductInfo(id) {
        var allPromises = [];
        allPromises.push(axios.get(`/products/${id}`));
        allPromises.push(axios.get(`/products/${id}/styles`));
        allPromises.push(axios.get(`/products/${id}/related`));
        allPromises.push(axios.get(`/reviews/meta`, { params: { product_id: id } }));
        allPromises.push(axios.get(`/reviews`, { params: { product_id: id, count: 5000 } }));
        allPromises.push(axios.get(`/qa/questions`, { params: { product_id: id } }));
        Promise.all(allPromises)
            .then((allPromisesData) => {
                var filteredRelatedProductsIDs = allPromisesData[2].data.filter(id => id !== this.state.productID);
                filteredRelatedProductsIDs = [...new Set(filteredRelatedProductsIDs)];
                this.setState({
                    productInfo: allPromisesData[0].data,
                    productStyle: allPromisesData[1].data,
                    relatedProductsIDs: filteredRelatedProductsIDs,
                    meta: allPromisesData[3].data,
                    reviews: allPromisesData[4].data,
                    questions: allPromisesData[5].data
                })
                return filteredRelatedProductsIDs;
            })
            .then((relatedIDs) => {
                var arrayOfPromises = [];
                relatedIDs.forEach((relatedId) => {
                    arrayOfPromises.push(axios.get(`/products/${relatedId}`));
                })
                return Promise.all(arrayOfPromises);
            })
            .then((arrayOfPromisesData) => {
                var relatedProductsInfo = arrayOfPromisesData.map((product) => (product.data));
                this.setState({
                    relatedProductsInfo: relatedProductsInfo
                })
            })
            .catch((error) => {
                console.log('Error fetching product info in App', error);
            });
    }

    updateProductID(id) {
        console.log('update product id = ', id)
        this.setState({
            productID: id
        }, () => {
            this.getProductInfo(this.state.productID);
        })
    }

    render() {
        const { productID, productInfo, productStyle, relatedProductsIDs, relatedProductsInfo, meta, reviews, questions, recommend, rating, ratings, count } = this.state;
        {console.log(meta, reviews,'meta')};
        return (
            <div className="app" >
                <p id="logo"> Good Deals Only </p>
                <Navbar />
                <Overview productID={productID} productInfo={productInfo} productStyle={productStyle} meta={meta} />
                <RelatedProducts productID={productID} productInfo={productInfo}  productStyle={productStyle} relatedProductsIDs={relatedProductsIDs} relatedProductsInfo={relatedProductsInfo} updateProductID={this.updateProductID} />
                <QandA productID={this.state.productID} />
                {Object.keys(meta).length === 0 || Object.keys(reviews).length === 0? null : <RR_app id={productID} meta={meta} reviews={reviews.results} />}
                {/* <RR_app id={productID} meta={meta} reviews={reviews.results} /> */}
            </div>
        )
    }
}

export default App;
