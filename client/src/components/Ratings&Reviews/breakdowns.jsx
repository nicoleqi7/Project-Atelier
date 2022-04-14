import React from "react"

  
  class BarChart extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            totalRating: 0,
        }

      }


    render() {
        const aa = 30;
        return (
            <div> 
                <div className="starBreakDown_RR">
                {[...Array(5)].map((bar, index)=>{
                    const order = 5 - (index);
                    return (
                        <svg height='30' width="300" key={order}> 
                            <text className="name-label" x="0" y="15">{order} Stars</text>
                            <rect className='grey' width='100' height='10' x='90' y='5'fill="grey" opacity='0.25'/>
                            <rect className='green' width={((this.props.ratings[order]/this.props.count)*100).toString()} height='10'  x='90' y='5' fill="green" />
                        </svg>
                    )
                })}
                </div>
                <svg width='100' height='10'> 
                <polygon points="0,0 10,0 5,10" transform={`translate(${aa} 0)`}/>
                </svg>
          

            </div>
            
        )
    }

  }
export default BarChart;