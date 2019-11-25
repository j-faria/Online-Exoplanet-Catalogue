
<script type="application/javascript" >
	function change(x) {
		document.getElementById(x).height="300px";
		document.getElementById(x).width="100%";
		var canvas=document.getElementById("canvas"x);
		var ctx = document.getElementById(canvas).getContext('2d');
		ctx.height="300px";
		ctx.width="100%";
		ctx.fillStyle = "#FF0000";
		var CanvasJS = require('canvasjs');
		var ctx = document.getElementById("canvas"x).getContext('2d');
	var chart = new CanvasJS.Chart(joinc, {
	animationEnabled: true,
	title:{
		text: "Predicted Rainfall - 2017"
	},
	axisX: {
		interval: 1
	},
	axisY:{
		title: "Precipitation (in inch)",
		suffix: " in",
		includeZero: false
	},
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
			name: "Predicted",
			toolTipContent: "<b>{label}</b><br><span style=\"color:#4F81BC\">{name}</span>: {y} in",
			markerType: "none",
			dataPoints: [
				{ y: 3.69, label: "Jan" },
				{ y: 3.06, label: "Feb" },
				{ y: 4.08, label: "Mar" },
				{ y: 4.06, label: "Apr" },
				{ y: 4.48, label: "May" },
				{ y: 3.45, label: "Jun" },
				{ y: 4.17, label: "Jul" },
				{ y: 4.05, label: "Aug" },
				{ y: 4.05, label: "Sep" },
				{ y: 3.5, label: "Oct" },
				{ y: 4.0, label: "Nov" },
				{ y: 3.86, label: "Dec" }
			]
		},
		{
			type: "error",
			name: "Error Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} in - {y[1]} in",
			dataPoints: [
				{ y: [3.6, 3.8], label: "Jan" },
				{ y: [3.0, 3.4], label: "Feb" },
				{ y: [3.8, 4.3], label: "Mar" },
				{ y: [3.9, 4.2], label: "Apr" },
				{ y: [4.3, 4.6], label: "May" },
				{ y: [3.3, 3.6], label: "Jun" },
				{ y: [4.0, 4.4], label: "Jul" },
				{ y: [3.9, 4.3], label: "Aug" },
				{ y: [3.8, 4.2], label: "Sep" },
				{ y: [3.4, 3.7], label: "Oct" },
				{ y: [3.8, 4.2], label: "Nov" },
				{ y: [3.7, 4.0], label: "Dec" }
			]
	}]
});
chart.render();
	}
</script>
