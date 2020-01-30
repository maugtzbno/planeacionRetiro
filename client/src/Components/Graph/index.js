import React from 'react';
import API from "../../utils"
import CanvasJSReact from './canvasjs.react.js'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class linearGraph extends React.Component {	

	state = {
		ahorroScen: [],
		ahorroScenOpt: [],
		gastoScen: [],
		gastoScenOpt: []
	}

	componentDidMount = () => {
		API.getScenario(this.state)
			.then(x=>{
				this.setState({
					ahorroScen: x.data.ahorroScen,
					ahorroScenOpt: x.data.ahorroScenOpt,
					gastoScen: x.data.gastoScen,
					gastoScenOpt: x.data.gastoScenOpt
				})
			}, x=>console.log(this.state))
	}

	render() {
		if (this.state.ahorroScen.length > 0) {
			var dataAhorro = []
			var dataGasto = []
			for (var i=0; i<this.state.ahorroScen.length;i++){
				dataAhorro.push({
					x:i,
					y: [this.state.ahorroScen[i], this.state.ahorroScenOpt[i]]
				})
			}

			for (var j=0; j<this.state.gastoScen.length;j++){
				dataGasto.push({
					x:j,
					y: [this.state.gastoScen[j], this.state.gastoScenOpt[j]]
				})
			}

		}

		const optionsA = {
			animationEnabled: true,
			title:{
				text: "Periodo de Ahorro"
			},
			axisX: {
				valueFormatString: "###"
			},
			axisY: {
				title: "Inversion",
				prefix: "$",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "###",
				type: "rangeSplineArea",
				dataPoints: dataAhorro
			}]
		}

		const optionsG = {
			animationEnabled: true,
			title:{
				text: "Periodo de Retiro"
			},
			axisX: {
				valueFormatString: "###"
			},
			axisY: {
				title: "Inversion",
				prefix: "$",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "###",
				type: "rangeSplineArea",
				dataPoints: dataGasto
			}]
		}
		  
	 return (
		<div>
		  <CanvasJSChart options = {optionsA}/>
		  <CanvasJSChart options = {optionsG}/>
		</div>
	  );
	}
  }

  export default linearGraph;