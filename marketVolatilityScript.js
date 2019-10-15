var fullYearArray = [[1872],[1873],[1874],[1875],[1876],[1877],[1878],[1879],[1880],[1881],[1882],[1883],[1884],[1885],[1886],[1887],[1888],[1889],[1890],[1891],[1892],[1893],[1894],[1895],[1896],[1897],[1898],[1899],[1900],[1901],[1902],[1903],[1904],[1905],[1906],[1907],[1908],[1909],[1910],[1911],[1912],[1913],[1914],[1915],[1916],[1917],[1918],[1919],[1920],[1921],[1922],[1923],[1924],[1925],[1926],[1927],[1928],[1929],[1930],[1931],[1932],[1933],[1934],[1935],[1936],[1937],[1938],[1939],[1940],[1941],[1942],[1943],[1944],[1945],[1946],[1947],[1948],[1949],[1950],[1951],[1952],[1953],[1954],[1955],[1956],[1957],[1958],[1959],[1960],[1961],[1962],[1963],[1964],[1965],[1966],[1967],[1968],[1969],[1970],[1971],[1972],[1973],[1974],[1975],[1976],[1977],[1978],[1979],[1980],[1981],[1982],[1983],[1984],[1985],[1986],[1987],[1988],[1989],[1990],[1991],[1992],[1993],[1994],[1995],[1996],[1997],[1998],[1999],[2000],[2001],[2002],[2003],[2004],[2005],[2006],[2007],[2008],[2009],[2010],[2011],[2012],[2013],[2014],[2015],[2016],[2017],[2018]];
var fullReturnArray = [[0.10564628],[-0.01051048],[0.16726393],[0.08647751],[-0.10111591],[0.10852747],[0.30272825],[0.25863000],[0.26506773],[0.00754206],[0.04524071],[0.04856467],[-0.03003743],[0.28561344],[0.18669091],[-0.08085903],[0.02144484],[0.14494326],[-0.10880923],[0.28996283],[0.04842370],[-0.08809628],[0.10093541],[0.02037703],[0.03476546],[0.17104936],[0.21686824],[-0.05802979],[0.23429345],[0.14567900],[-0.01762855],[-0.09306329],[0.25612215],[0.19769257],[0.01421487],[-0.27851498],[0.40358461],[0.07720235],[-0.00100293],[0.08146939],[0.00774448],[-0.11936508],[-0.04226799],[0.33016652],[-0.03285628],[-0.36563638],[0.04726704],[0.04868352],[-0.20524493],[0.29123407],[0.30159024],[0.01030603],[0.26010015],[0.24722063],[0.15205907],[0.38717852],[0.39602563],[-0.04762619],[-0.18708236],[-0.35480356],[-0.00905981],[0.52937729],[-0.04211400],[0.42660086],[0.33734128],[-0.33680463],[0.26102271],[0.01923017],[-0.10200805],[-0.18744427],[0.07402407],[0.23231769],[0.17224463],[0.34937355],[-0.22961098],[-0.03978509],[0.03751590],[0.18900406],[0.24679328],[0.17377259],[0.17416256],[-0.01793409],[0.53234554],[0.30827152],[0.03461479],[-0.13311901],[0.40721207],[0.09988507],[-0.00914633],[0.25927959],[-0.09949449],[0.20650978],[0.15170316],[0.10217401],[-0.13073318],[0.20217571],[0.05961359],[-0.13779226],[-0.01551897],[0.10650954],[0.14977101],[-0.21611739],[-0.34487770],[0.28256065],[0.17798142],[-0.13273312],[-0.02442237],[0.04283415],[0.17508995],[-0.12820033],[0.16940491],[0.17903554],[0.02047669],[0.26731430],[0.17253720],[0.00623430],[0.11379175],[0.25503517],[-0.08810157],[0.26452746],[0.04564285],[0.07073849],[-0.01351821],[0.33962266],[0.18860776],[0.31049965],[0.26448619],[0.17833012],[-0.12068753],[-0.13175933],[-0.23874928],[0.26158349],[0.07281020],[0.01333608],[0.12783176],[0.01253945],[-0.36993209],[0.23423224],[0.13294291],[-0.00962996],[0.13754196],[0.30250475],[0.12679174],[0.00607562],[0.09561203],[0.19194399],[-0.06222575]];
var startingYear = 1872;
var numYears = fullYearArray.length;

var minSelectedYear = 0;
var maxSelectedYear = 0;

var selectedYearArray = [];
var selectedReturnArray = [];

var timePeriod = 0;
var timePeriodMax = 80;

var initialContribution = 0;
var annualContribution = 0;

var returnIncludeMatrix = [];
var returnValueMatrix = [];
var portfolioValueMatrix = [];

var sequenceLabelArray = [];
var sequenceLabelArraySorted = [];

var numSequences = 0;

var upSequences = 0;
var downSequences = 0;

var chart;
var chart2;
var chart3;
var chartActive = 0;

var initialContributionInput = document.getElementById("initialContributionInput");
var annualContributionInput = document.getElementById("annualContributionInput");
var timePeriodInput = document.getElementById("timePeriodInput");

var focusYearInput = document.getElementById("focusYearInput");
var focusYearPortfolioArray = [];
var focusYearPortfolioArraySorted = [];

var focusYearIRRArray = [];
var focusYearIRRArraySorted = [];

var minCell = document.getElementById("minCell");
var medianCell = document.getElementById("medianCell");
var averageCell = document.getElementById("averageCell");
var maxCell = document.getElementById("maxCell");
var pct10Cell = document.getElementById("pct10Cell");
var pct25Cell = document.getElementById("pct25Cell");
var pct50Cell = document.getElementById("pct50Cell");
var pct75Cell = document.getElementById("pct75Cell");
var pct90Cell = document.getElementById("pct90Cell");
var customPercentileInput = document.getElementById("customPercentileInput");
var customPercentileCell = document.getElementById("customPercentileCell");

var portfolioValueMin = 0;
var portfolioValueMax = 0;
var portfolioValueMedian = 0;
var range1090 = 0;

var IRRMin = 0;
var IRRMax = 0;
var IRRMedian = 0;

var IRRGuess = 0.07;

var minIRRCell = document.getElementById("minIRRCell");
var medianIRRCell = document.getElementById("medianIRRCell");
var averageIRRCell = document.getElementById("averageIRRCell");
var maxIRRCell = document.getElementById("maxIRRCell");
var pct10IRRCell = document.getElementById("pct10IRRCell");
var pct25IRRCell = document.getElementById("pct25IRRCell");
var pct50IRRCell = document.getElementById("pct50IRRCell");
var pct75IRRCell = document.getElementById("pct75IRRCell");
var pct90IRRCell = document.getElementById("pct90IRRCell");
var customPercentileIRRCell = document.getElementById("customPercentileIRRCell");

var totalContribution = 0;

var customPercentileOutput = 0;
var customPercentileIRROutput = 0;

var mySlider = new rSlider({
    target: '#yearRangeSlider',
    values: {min: 1872, max: 2018},
    step: 1,
    range: true,
    tooltip: true,
    scale: true,
    labels: false,
    set: [1872, 2018],
    onChange: function (values) {
        refreshAnalysis();
    }
});

var outputPara1 = document.getElementById("outputPara1");
var outputPara2 = document.getElementById("outputPara2");
var outputPara3 = document.getElementById("outputPara3");
var outputPara4 = document.getElementById("outputPara4");

var yearRangeSliderDiv = document.getElementById("yearRangeSliderDiv");
var advancedOptionsButton = document.getElementById("advancedOptionsButton");
var advancedOptionsSwitch = 0;
yearRangeSliderDiv.classList.add("hide");

var chartNotePara = document.getElementById("chartNotePara");

var loadingImageDiv = document.getElementById("loadingImageDiv");
var masterOutputContainerDiv = document.getElementById("masterOutputContainerDiv");


//main method
var inputsArray = document.getElementsByClassName("userInput");
for(i=0;i<inputsArray.length;i++) {
    inputsArray[i].addEventListener('change',refreshAnalysis, false);
    console.log("add input event listener");
}

var inputsArray2 = document.getElementsByClassName("userInput2");
for(i=0;i<inputsArray2.length;i++) {
    inputsArray2[i].addEventListener('change',refreshFocusYearMetrics, false);
    console.log("add input event listener");
}

var inputsArray3 = document.getElementsByClassName("userInput3");
for(i=0; i<inputsArray3.length; i++){
    inputsArray3[i].addEventListener('change',refreshCustomPercentile, false);
    console.log("add input event listener");
}

getUserInputs();
calculateSequences();
showOutputs();
showFocusYearMetrics();
showTextOutputs();


function getUserInputs(){

    initialContribution = Number(initialContributionInput.value);
    annualContribution = Number(annualContributionInput.value);
    timePeriod = Number(timePeriodInput.value);

    if(timePeriod > timePeriodMax){
        timePeriod = timePeriodMax;
        timePeriodInput.value = timePeriodMax;
    }

    if(timePeriod < 0){
        timePeriod = 1;
        timePeriodInput.value = 1;        
    }

    //show output section (and hide loading animation) only if the inputs have been filled in
    if(timePeriod > 0 && (initialContribution > 0 || annualContribution > 0)){
        loadingImageDiv.classList.add("hide");
        masterOutputContainerDiv.classList.remove("hide");
    } else{
        loadingImageDiv.classList.remove("hide");
        masterOutputContainerDiv.classList.add("hide");        
    }

    var yearRangeSliderValues = mySlider.getValue();
    var yearRangeSliderValuesArray = yearRangeSliderValues.split(',');

    console.log("refresh Slider values: "+yearRangeSliderValues);

    minSelectedYear = Number(yearRangeSliderValuesArray[0]);
    maxSelectedYear = Number(yearRangeSliderValuesArray[1]);

    var startYearOffset = minSelectedYear - startingYear;
    var yearRange = maxSelectedYear - minSelectedYear + 1;

    for(i=0; i<yearRange; i++){
        selectedYearArray[i] = fullYearArray[i+startYearOffset];
        selectedReturnArray[i] = fullReturnArray[i+startYearOffset];
    }

    numYears = selectedYearArray.length;

    //if the selected year range is less than the time period selected, reduce the time period
    if(timePeriod>numYears){
        timePeriodInput.value = numYears;
        timePeriod = numYears;
    }

    numSequences = numYears - timePeriod + 1;

    //dynamically set select options for the focus year field
    var selectString = "";

    for(i=1; i<=timePeriod; i++){
        if(i<timePeriod){
            selectString += "<option>"+i+"</option>";
        } else {
            selectString += "<option selected=\"selected\">"+i+"</option>";
        }        
    }
    focusYearInput.innerHTML = selectString;

}

function refreshAnalysis(){
    console.log("refresh analysis");

    selectedYearArray.length = 0;
    selectedReturnArray.length = 0;

    returnIncludeMatrix.length = 0;
    returnValueMatrix.length = 0;
    portfolioValueMatrix.length = 0;
    sequenceLabelArray.length = 0;

    focusYearPortfolioArray.length = 0;
    focusYearPortfolioArraySorted.length = 0;

    focusYearIRRArray.length = 0;
    focusYearIRRArraySorted.length = 0;

    upSequences = 0;
    downSequences = 0;

    if(chartActive == 1){
        chart.destroy();
        chart2.destroy();
        chart3.destroy();
    }

    minCell.innerHTML = "";
    medianCell.innerHTML = "";
    averageCell.innerHTML = "";
    maxCell.innerHTML = "";
    pct10Cell.innerHTML = "";
    pct25Cell.innerHTML = "";
    pct50Cell.innerHTML = "";
    pct75Cell.innerHTML = "";
    pct90Cell.innerHTML = "";
    
    customPercentileInput.value = "";
    customPercentileCell.innerHTML = "";
    customPercentileIRRCell.innerHTML = "";

    getUserInputs();
    calculateSequences();
    showOutputs();
    showFocusYearMetrics();
    showTextOutputs();
}

function refreshFocusYearMetrics(){
    customPercentileInput.value = "";
    customPercentileCell.innerHTML = "";
    customPercentileIRRCell.innerHTML = "";

    if(chartActive == 1){
        chart2.destroy();
        chart3.destroy();
    }

    showFocusYearMetrics();
}


function calculateSequences(){

    //create matrix arrays
    for(i=0; i<numYears; i++){
        returnIncludeMatrix[i] = [];
        returnValueMatrix[i] = [];
        portfolioValueMatrix[i] = [];
    }

    //create arrays that show the return years to be included, or "n/a" if out of range
    for(i=0; i<numYears; i++){
        for(j=0; j<numYears; j++){
            
            //set first year
            if(i==j){
                returnIncludeMatrix[i][j]=0;
            } else if(j==0){
                returnIncludeMatrix[i][j]="n/a";
            } else{      
                //set all other years
                if(isNaN(returnIncludeMatrix[i][j-1])){
                    returnIncludeMatrix[i][j] = "n/a";
                } else if(returnIncludeMatrix[i][j-1] >= timePeriod-1){
                    returnIncludeMatrix[i][j] = "n/a";
                    break;
                } else {
                    returnIncludeMatrix[i][j] = returnIncludeMatrix[i][j-1] + 1;            
                }
            }
        }
    }

    //create arrays of the actual % returns in each sequence(e.g., if time period is 5 years, this creates all of the possible 5 year return sequences)
    for(i=0; i<numSequences; i++){
        for(j=0; j<numYears; j++){
            
            if(j>=returnIncludeMatrix[i].length){
                break;
            }

            returnIncludeYear = returnIncludeMatrix[i][j];
            
            if(typeof(returnIncludeYear) == "number"){
                returnValueMatrix[i][returnIncludeYear] = selectedReturnArray[j];

                if(returnIncludeYear == 0){
                    sequenceLabelArray[i] = selectedYearArray[j] + " - " + (Number(selectedYearArray[j])+timePeriod-1);
                }
            }
        }
    }

    //create arrays of the portfolio amounts at the end of each year
    for(i=0; i<numSequences; i++){
        for(j=0; j<=timePeriod; j++){
            if(j==0){
                portfolioValueMatrix[i][j] = initialContribution;
            } else{
                portfolioValueMatrix[i][j] = portfolioValueMatrix[i][j-1] + annualContribution + (portfolioValueMatrix[i][j-1]) * returnValueMatrix[i][j-1]; 
            }
        }
    }

}


function showOutputs(){

    var yearLabelArray = [];

    for(i=0; i<=timePeriod; i++){
        yearLabelArray[i] = i; 
    }

    if(timePeriod <= 10){
        tickSpacing = 1;
    } else if(timePeriod<= 20){
        tickSpacing = 2;
    } else if(timePeriod <= 40) {
        tickSpacing = 4;
    } else {
        tickSpacing = 5;
    }

    var chartData = [];
    var contributionArray = [];
    
    for(var i=0; i<numSequences+1; i++) {
        if(i==0){
            for(j=0; j<=timePeriod; j++){
                if(j==0){
                    contributionArray[j] = initialContribution;
                } else{
                    contributionArray[j] = contributionArray[j-1] + annualContribution;
                }
            }

            chartData[i] = {
                label:"Your Contributions",
                data: contributionArray,
                backgroundColor: "#F2AD00",
                hoverBackgroundColor: "#F2AD00",
                borderColor: "#F2AD00",
                borderStyle: 'solid',
                borderWidth: 3,
                fill: false,
                lineTension:0,
                pointBorderWidth: 2,
                pointRadius:2,
                pointHoverRadius:3,
            }
        }
        else {
                chartData[i] = {
                label:sequenceLabelArray[i-1],
                data: portfolioValueMatrix[i-1],
                backgroundColor: "rgb(94, 94, 94)",
                hoverBackgroundColor: "rgb(94, 94, 94)",
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderStyle: 'solid',
                borderWidth: 2,
                fill: false,
                lineTension:0,
                pointBorderWidth: 1,
                pointRadius:2,
                pointHoverRadius:3,
            }
        }
    }

    totalContribution = contributionArray[contributionArray.length-1];

    chartActive = 1;

    //draw line chart of portfolio value over time for each sequence
    var ctx = document.getElementById('portfolioSequenceChart').getContext('2d');

    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: yearLabelArray,
            datasets: chartData,
        },
    
        // Configuration options go here
        options: {

            maintainAspectRatio: false,
        
            tooltips: {
                
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += '$'+tooltipItem.yLabel.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0, });
                        return label;
                    }
                },
            },

            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return '$' + (value).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0, })+" ";
                        },

                        fontColor: "rgb(56,56,56)",
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Portfolio Value",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                xAxes: [{
                    ticks: {
                        userCallback: function(item, index) {
                            if (!(index % tickSpacing)) return item;
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",

                        padding: 5,

                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Year",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {

                display: false,

                labels: {
                    fontColor: "rgb(56,56,56)",
                    boxWidth: 13,
                    padding: 10,
                },
            },

            title: {
                display: true,
                text: "Portfolio Value",
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 2,
            },

            layout: {
                padding: {
                    // Any unspecified dimensions are assumed to be 0                     
                    top: 3,
                    right: 5,
                    left: 5,
                    bottom: 3,
                }
            }


        }
    });


}

function showTextOutputs(){

    //display chart note under the main chart
    chartNotePara.innerHTML = "The <span class=\"grayText\">gray lines</span> in the chart above shows the value of your portfolio over time, where each line is calculated using a different "+timePeriod+"-year 'sequence' of returns from the history of the U.S. stock market. The <span class=\"orangeText\">orange line</span> shows the cumulative amount of your contributions over time.";
    
    //display output paragraph
    outputPara1.innerHTML = "There are <span class=\"highlightText\">"+numSequences+" sequences</span> shown in the chart above, representing all of the rolling "+timePeriod+"-year periods from "+minSelectedYear+" to "+maxSelectedYear+".";
    
    outputPara2.innerHTML = "Final portfolio value after "+timePeriod+" years:"+
    "<ul><li><b>Worst Sequence</b>: your portfolio would be worth <span class=\"highlightText\">$"+Math.round(focusYearPortfolioArraySorted[0]).toLocaleString()+"</span> (return of <span class=\"highlightText\">"+(Math.round(focusYearIRRArraySorted[0]*1000)/10).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1, })+"% per year</span>),"+" if the market returns of <span class=\"highlightText\">"+sequenceLabelArraySorted[0]+"</span> repeat"+
    "</li><li><b>Best Sequence</b>: your portfolio would be worth <span class=\"highlightText\">$"+Math.round(focusYearPortfolioArraySorted[numSequences-1]).toLocaleString()+"</span> (return of <span class=\"highlightText\">"+(Math.round(focusYearIRRArraySorted[numSequences-1]*1000)/10).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1, })+"% per year</span>),"+" if the market returns of <span class=\"highlightText\">"+sequenceLabelArraySorted[numSequences-1]+"</span> repeat"+
    "</li><li><b>Median</b>: based on the median value across all historical sequences, your portfolio would be worth <span class=\"highlightText\">$"+Math.round(portfolioValueMedian).toLocaleString()+"</span> (return of <span class=\"highlightText\">"+(Math.round(IRRMedian*1000)/10).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1, })+"% per year</span>)"+
    "</li></ul>";

    outputPara3.innerHTML = "After "+timePeriod+" years, you will have contributed a total of <span class=\"highlightText\">$"+Math.round(totalContribution).toLocaleString()+"</span> to your portfolio.";
    outputPara4.innerHTML = "In <span class=\"redHighlightText\">"+(Math.round((downSequences/numSequences)*1000)/10)+"% of the sequences</span> ("+downSequences+" sequences), your final portfolio value ended up being less than the amount of your contributions.";

}

function showFocusYearMetrics(){

    //create array of portfolio values for the selected focus year
    var focusYear = Number(focusYearInput.value);
    console.log("Focus Year: "+focusYear);

    for(i=0; i<numSequences; i++){
        focusYearPortfolioArray[i] = portfolioValueMatrix[i][focusYear];
        
        //count sequences that end up higher or lower than the contribution amount
        if(focusYearPortfolioArray[i] >= totalContribution){
            upSequences++;
        } else{
            downSequences++;
        }

        //calc IRR for each sequence and fill array
        var currentIRR = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,focusYearPortfolioArray[i],0,IRRGuess);
        focusYearIRRArray[i] = currentIRR;
    }

    console.log("Focus Year Portfolio Array: "+focusYearPortfolioArray);
    console.log("Focus Year IRR Array: "+focusYearIRRArray);

    //sort portfolio value array from low to high
    focusYearPortfolioArraySorted = focusYearPortfolioArray.slice();
    focusYearPortfolioArraySorted.sort((a, b) => a - b);

    console.log("Focus Year Portfolio Array Sorted: "+focusYearPortfolioArraySorted);

    //sort sequence label array and IRR array in the same order as of the sorted portfolio value array
    for(i=0; i<numSequences; i++){
        var unsortedPosition = 0;
        unsortedPosition = focusYearPortfolioArray.indexOf(focusYearPortfolioArraySorted[i]);
        sequenceLabelArraySorted[i] = sequenceLabelArray[unsortedPosition];
        focusYearIRRArraySorted[i] = focusYearIRRArray[unsortedPosition];
    }

    //Calculate and display summary statistics for the focus year
    portfolioValueMin = focusYearPortfolioArraySorted[0];
    portfolioValueMax = focusYearPortfolioArraySorted[focusYearPortfolioArraySorted.length-1];
    portfolioValueMedian = Median(focusYearPortfolioArraySorted);
    var portfolioValueAverage = Array_Average(focusYearPortfolioArraySorted);
    var portfolioValue10 = Quartile(focusYearPortfolioArraySorted, 0.1);
    var portfolioValue25 = Quartile(focusYearPortfolioArraySorted, 0.25);
    var portfolioValue50 = Quartile(focusYearPortfolioArraySorted, 0.50);
    var portfolioValue75 = Quartile(focusYearPortfolioArraySorted, 0.75);
    var portfolioValue90 = Quartile(focusYearPortfolioArraySorted, 0.9);

    IRRMin = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValueMin,0,IRRGuess);
    IRRMax = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValueMax,0,IRRGuess);
    IRRMedian = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValueMedian,0,IRRGuess);
    var IRRAverage = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValueAverage,0,IRRGuess);
    var IRR10 = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValue10,0,IRRGuess);
    var IRR25 = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValue25,0,IRRGuess);
    var IRR50 = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValue50,0,IRRGuess);
    var IRR75 = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValue75,0,IRRGuess);
    var IRR90 = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,portfolioValue90,0,IRRGuess);

    range1090 = portfolioValue90 - portfolioValue10;

    minCell.innerHTML = "$"+Math.round(portfolioValueMin).toLocaleString();
    medianCell.innerHTML = "$"+Math.round(portfolioValueMedian).toLocaleString();
    averageCell.innerHTML = "$"+Math.round(portfolioValueAverage).toLocaleString();
    maxCell.innerHTML = "$"+Math.round(portfolioValueMax).toLocaleString();
    pct10Cell.innerHTML = "$"+Math.round(portfolioValue10).toLocaleString();
    pct25Cell.innerHTML = "$"+Math.round(portfolioValue25).toLocaleString();
    pct50Cell.innerHTML = "$"+Math.round(portfolioValue50).toLocaleString();
    pct75Cell.innerHTML = "$"+Math.round(portfolioValue75).toLocaleString();
    pct90Cell.innerHTML = "$"+Math.round(portfolioValue90).toLocaleString();

    minIRRCell.innerHTML = (Math.round(IRRMin*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    medianIRRCell.innerHTML = (Math.round(IRRMedian*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    averageIRRCell.innerHTML = (Math.round(IRRAverage*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    maxIRRCell.innerHTML = (Math.round(IRRMax*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    pct10IRRCell.innerHTML = (Math.round(IRR10*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    pct25IRRCell.innerHTML = (Math.round(IRR25*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    pct50IRRCell.innerHTML = (Math.round(IRR50*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    pct75IRRCell.innerHTML = (Math.round(IRR75*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
    pct90IRRCell.innerHTML = (Math.round(IRR90*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";

    //create histogram for portfolio values in the focus year
    var binWidth = 0;
    
    var histogramLabelArray = [];
    var histogramBinMin = [];
    var histogramBinMax = [];
    var histogramBinCount = [];
    var histogramBinPercent = [];

    if(range1090 < 1000){
        binWidth = 100;
    } else if(range1090 < 2500){
        binWidth = 250;
    } else if(range1090 < 5000){
        binWidth = 500;
    } else if(range1090 < 10000) {
        binWidth = 1000;
    } else if(range1090 < 25000){
        binWidth = 2500;
    } else if(range1090 < 50000){
        binWidth = 5000;
    } else if(range1090 < 100000){
        binWidth = 10000;
    } else if(range1090 < 250000){
        binWidth = 25000;
    } else if(range1090 < 500000){
        binWidth = 50000;
    } else if(range1090 < 1000000){
        binWidth = 100000;
    } else {
        binWidth = Math.round((range1090/10)/100000)*100000;
    }

    console.log("Bin width: "+binWidth);

    //set bin ranges for the histogram
    for(i=0; i<(portfolioValueMax/binWidth); i++){
        histogramBinMin[i] = i*binWidth;
        histogramBinMax[i] = (i+1)*binWidth;
        histogramBinCount[i] = 0;
        
        if(histogramBinMax[i] > portfolioValueMax){
            histogramLabelArray[i] = ">= $"+histogramBinMin[i].toLocaleString();
        } else{
            histogramLabelArray[i] = "$"+histogramBinMin[i].toLocaleString() + " - " + "$"+histogramBinMax[i].toLocaleString();
        }
    }

    console.log("Bin label array: "+histogramLabelArray);

    //cycle through sequence values and allocate to the various bin ranges
    for(i=0; i<numSequences; i++){
        var currentPortfolioValue = portfolioValueMatrix[i][focusYear];
        var currentBinPosition = Math.ceil(currentPortfolioValue / binWidth)-1;
        histogramBinCount[currentBinPosition] = histogramBinCount[currentBinPosition]+1;
    }

    //calc percent of total sequences in each bin
    for(i=0; i<histogramBinCount.length; i++){
        histogramBinPercent[i] = histogramBinCount[i] / numSequences;
    }

    console.log("Histogram bin count: "+histogramBinCount);

    //draw bar chart for distribution of portfolio values in the focus year
    var ctx2 = document.getElementById('focusYearDistributionChart').getContext('2d');

    chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: histogramLabelArray,
            datasets: [{
                data: histogramBinPercent,
                backgroundColor: "#F98400",
                borderColor: "#F98400",
                borderWidth:2,
            }],
        },
        // Configuration options go here
        options: {

            maintainAspectRatio: false,
        
            tooltips: {
                
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += (Math.round(tooltipItem.yLabel*1000)/10).toLocaleString()+"%";
                        return label;
                    }
                },
            },

            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return (Math.round(value*1000)/10).toLocaleString()+"% ";
                        },

                        fontColor: "rgb(56,56,56)",
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Frequency %",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                xAxes: [{
                    ticks: {
                        userCallback: function(item, index) {
                            if (!(index % 1)) return item;
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",

                        padding: 5,

                        maxRotation: 90,
                        minRotation: 90,

                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Portfolio Value",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {

                display: false,

                labels: {
                    fontColor: "rgb(56,56,56)",
                    boxWidth: 13,
                    padding: 10,
                },
            },

            title: {
                display: true,
                text: "Portfolio Value Distribution (after "+focusYear+" years)",
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 2,
            },

            layout: {
                padding: {
                    // Any unspecified dimensions are assumed to be 0                     
                    top: 3,
                    right: 5,
                    left: 5,
                    bottom: 3,
                }
            }


        }
    });

    //create histogram for IRR values in the focus year

    var IRRHistogramLabelArray = [];
    var IRRHistogramBinMin = [];
    var IRRHistogramBinMax = [];
    var IRRHistogramBinCount = [];
    var IRRHistogramBinPercent = [];

    var IRRBins = 10;
    var IRRRangeMin = -0.20;
    var IRRBinWidth = 0.05;

    //set bin ranges for the IRR histogram
    for(i=0; i<IRRBins; i++){

        IRRHistogramBinCount[i] = 0;
        
        if(i==0){
            IRRHistogramBinMin[i] = "n/a";
            IRRHistogramBinMax[i] = IRRRangeMin;
            IRRHistogramLabelArray[i] = "<"+(Math.round(IRRRangeMin*100))+"%";
        } else if(i == IRRBins-1){
            IRRHistogramBinMin[i] = IRRHistogramBinMax[i-1];
            IRRHistogramBinMax[i] = "n/a";
            IRRHistogramLabelArray[i] = ">="+(Math.round(IRRHistogramBinMin[i]*100))+"%";
        } else{
            IRRHistogramBinMin[i] = IRRHistogramBinMax[i-1];
            IRRHistogramBinMax[i] = IRRHistogramBinMin[i]+IRRBinWidth;            
            IRRHistogramLabelArray[i] = (Math.round(IRRHistogramBinMin[i]*100))+"%" + " to " + (Math.round(IRRHistogramBinMax[i]*100))+"%";
        }
    }

    console.log("IRR Bin label array: "+IRRHistogramLabelArray);

    //cycle through sequence values and allocate to the various bin ranges
    for(i=0; i<numSequences; i++){
        var currentIRRValue = focusYearIRRArray[i];

        for(j=0; j<IRRBins; j++){
            if(IRRHistogramBinMin[j] == "n/a" && currentIRRValue < IRRHistogramBinMax[j]){
                IRRHistogramBinCount[j] = IRRHistogramBinCount[j] + 1; 
            }

            if(currentIRRValue >= IRRHistogramBinMin[j] && IRRHistogramBinMax[j] == "n/a"){
                IRRHistogramBinCount[j] = IRRHistogramBinCount[j] + 1; 
            }

            if(currentIRRValue >= IRRHistogramBinMin[j] && currentIRRValue < IRRHistogramBinMax[j]){
                IRRHistogramBinCount[j] = IRRHistogramBinCount[j] + 1; 
            }
        }
    }

    //calc percent of total sequences in each bin
    for(i=0; i<IRRHistogramBinCount.length; i++){
        IRRHistogramBinPercent[i] = IRRHistogramBinCount[i] / numSequences;
    }

    console.log("IRR Histogram bin count: "+IRRHistogramBinCount);

    //draw bar chart for distribution of IRR values in the focus year
    var ctx3 = document.getElementById('focusYearIRRDistributionChart').getContext('2d');

    chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: IRRHistogramLabelArray,
            datasets: [{
                data: IRRHistogramBinPercent,
                backgroundColor: "#5BBCD6",
                borderColor: "#5BBCD6",
                borderWidth:2,
            }],
        },
        // Configuration options go here
        options: {

            maintainAspectRatio: false,
        
            tooltips: {
                
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += (Math.round(tooltipItem.yLabel*1000)/10).toLocaleString()+"%";
                        return label;
                    }
                },
            },

            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return (Math.round(value*1000)/10).toLocaleString()+"% ";
                        },

                        fontColor: "rgb(56,56,56)",
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Frequency %",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                xAxes: [{
                    ticks: {
                        userCallback: function(item, index) {
                            if (!(index % 1)) return item;
                        },
                        autoSkip: false,
                        fontColor: "rgb(56,56,56)",

                        padding: 5,

                        maxRotation: 90,
                        minRotation: 90,

                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Avg. Annual Return",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {

                display: false,

                labels: {
                    fontColor: "rgb(56,56,56)",
                    boxWidth: 13,
                    padding: 10,
                },
            },

            title: {
                display: true,
                text: "Avg. Annual Return (after "+focusYear+" years)",
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 2,
            },

            layout: {
                padding: {
                    // Any unspecified dimensions are assumed to be 0                     
                    top: 3,
                    right: 5,
                    left: 5,
                    bottom: 3,
                }
            }


        }
    });

    //console.log("IRR array length: "+focusYearIRRArraySorted.length);
    //console.log("Focus year IRR array (sorted): "+focusYearIRRArraySorted);

}

function refreshCustomPercentile(){
    console.log("Refresh custom percentile");

    var customPercentileValue = Quartile(focusYearPortfolioArraySorted, Number(customPercentileInput.value)/100);
    customPercentileCell.innerHTML = "$"+Math.round(customPercentileValue).toLocaleString();

    var customPercentileIRRValue = solveRate(timePeriod,annualContribution*-1,initialContribution*-1,customPercentileValue,0,IRRGuess);

    customPercentileIRRCell.innerHTML = (Math.round(customPercentileIRRValue*1000)/10).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})+"%";
}


//stats functions to calculate percentile, median, average, std dev, etc.
function Median(data) {
    return Quartile_50(data);
}
  
function Quartile_25(data) {
    return Quartile(data, 0.25);
}

function Quartile_50(data) {
    return Quartile(data, 0.5);
}

function Quartile_75(data) {
    return Quartile(data, 0.75);
}

function Quartile(data, q) {
    data=Array_Sort_Numbers(data);
    var pos = ((data.length) - 1) * q;
    var base = Math.floor(pos);
    var rest = pos - base;
    if( (data[base+1]!==undefined) ) {
        return data[base] + rest * (data[base+1] - data[base]);
    } else {
        return data[base];
    }
}

function Array_Sort_Numbers(inputarray){
    return inputarray.sort(function(a, b) {
        return a - b;
    });
}

function Array_Sum(t){
    return t.reduce(function(a, b) { return a + b; }, 0); 
}

function Array_Average(data) {
    return Array_Sum(data) / data.length;
}

function Array_Stdev(tab){
    var i,j,total = 0, mean = 0, diffSqredArr = [];
    for(i=0;i<tab.length;i+=1){
        total+=tab[i];
    }
    mean = total/tab.length;
    for(j=0;j<tab.length;j+=1){
        diffSqredArr.push(Math.pow((tab[j]-mean),2));
    }
    return (Math.sqrt(diffSqredArr.reduce(function(firstEl, nextEl){
            return firstEl + nextEl;
    })/tab.length));  
}

//calculate rate of annuity
function solveRate(periods, payment, present, future, type, guess) {
    guess = (guess === undefined) ? 0.01 : guess;
    future = (future === undefined) ? 0 : future;
    type = (type === undefined) ? 0 : type;
  
    // Set maximum epsilon for end of iteration
    var epsMax = 1e-10;
  
    // Set maximum number of iterations
    var iterMax = 100;
  
    // Implement Newton's method
    var y, y0, y1, x0, x1 = 0,
      f = 0,
      i = 0;
    var rate = guess;
    if (Math.abs(rate) < epsMax) {
      y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
    } else {
      f = Math.exp(periods * Math.log(1 + rate));
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = present + payment * periods + future;
    y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
    i = x0 = 0;
    x1 = rate;
    while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
      rate = (y1 * x0 - y0 * x1) / (y1 - y0);
      x0 = x1;
      x1 = rate;
        if (Math.abs(rate) < epsMax) {
          y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
        } else {
          f = Math.exp(periods * Math.log(1 + rate));
          y = present * f + payment * (1 / rate + type) * (f - 1) + future;
        }
      y0 = y1;
      y1 = y;
      ++i;
    }
    return rate;
};


function toggleAdvancedOptions(){

    if(advancedOptionsSwitch == 0){
        yearRangeSliderDiv.classList.remove("hide");
        advancedOptionsSwitch = 1;
        advancedOptionsButton.innerHTML = "- Advanced Options";
    } else if(advancedOptionsSwitch == 1){
        yearRangeSliderDiv.classList.add("hide");
        advancedOptionsSwitch = 0;
        advancedOptionsButton.innerHTML = "+ Advanced Options";
    }

}