
rowsFxArray = [] // all rows of fx that created after clicked on the GpTree ... 
function GpTree() {
  rowsFxArray=[];
  var fx = [];
 
  var printEq = ''
  let lenOffx = generateRandomIntegerInRange(3,5);
  let countOffx = generateRandomIntegerInRange(1,5);
  var printTree = document.getElementById("printTree");
  if(oprats.length == 0 ){
    alert("Please select oprats ")
  }
  else{
     
    for(var j = 0; j < 5 ; j++){ //countOffx  = rows of fx for example  x1+x2+x3 \n x1+x2+x3 \n ...
        var eq = ''
          for(var i = 0; i < lenOffx ; i++){ //lenOffx = cout of one fx for example  x1+x2+x3....
            let a = generateRandomIntegerInRange(1,10) //value of befor X1 for example 5X2  then a=5
            let b = "X" + (i+1) //value of after X for example 5X2  then b=X2

            let sin =''
            if( i != lenOffx-1 )
              sin = oprats[generateRandomIntegerInRange(0,oprats.length-1)]
            

            let power = '' // for ^
            var powerEl = document.getElementById('^');
            if(powerEl.checked == true){
              let powrNumber = generateRandomIntegerInRange(1,10)
              power = "^"+powrNumber;
              console.log(power)
            }

            let ln = '' // for Ln
            var lnEl = document.getElementById('ln');
            if(lnEl.checked == true){
              ln = generateRandomIntegerInRange(1,10)
              ln = "Ln(" + ln + "x)";
              
            }


            let oprnd = '' // for sin cos ...
            let isOprnd = generateRandomIntegerInRange(0,1)
            if(isOprnd == 1 && oprand.length > 0 ){
              oprnd = oprand[generateRandomIntegerInRange(0,oprand.length-1)]
              oprnd = oprnd + "(";
            }

            if(isOprnd){
              if(eq == '' && oprnd == '')
                eq =      " [ " + a + oprnd + a + b + power  + ln + " ] " + sin
              else if(eq != '' && oprnd == '')
                eq = eq + " [ " + a + oprnd + a + b + power  + ln + " ] " + sin

              if(eq == '' && oprnd != '')
                eq =      " [ " + a + oprnd + a + b + power  +")" + ln + " ] " + sin
              else if(eq != '' && oprnd != '')
                eq = eq + " [ " + a + oprnd + a + b + power  + ")" + ln + " ] " + sin

            }
            else if (isOprnd == false){
              if(eq == '')
                eq =      a + b + power +  sin
              else if(eq != '')
                eq = eq + a + b +power +  sin
            }
          }
          
          rowsFxArray.push(convertToArray(eq))
          printEq = printEq +  eq + "<br>"
    }
    
     //Movment(rowsFxArray)
     printTree.innerHTML = printEq
     printTree.style["display"] = "flex";
  }
}

function Movment(){
      movmentVar = [] 
      //change column 1 , 3 
     

        // change fx[0]  <--> fx[1] and  fx[2]  <--> fx[3] .... for column 1 
        for(var step = 0 ; step < rowsFxArray.length-1 ; step++){
             movmentVar[step] = rowsFxArray[step][0]
             rowsFxArray[step][0] = rowsFxArray[step+1][0] 
             rowsFxArray[step+1][0] = movmentVar[step]
            
             // change fx[0]  <--> fx[1] and  fx[2]  <--> fx[3] .... for column 3 
             movmentVar = [] 
             movmentVar[step] = rowsFxArray[step][4]
             rowsFxArray[step][4] = rowsFxArray[step+1][4] 
             rowsFxArray[step+1][4] = movmentVar[step]
          
             step++
        }
        
      let printEqMove = '';
      let eq =''
      for(var i = 0; i < rowsFxArray.length;i++){
          eq = ''
          for(var j = 0; j < rowsFxArray[i].length ;j++){
            eq = eq + rowsFxArray[i][j]
          }
          printEqMove = printEqMove + eq + "<br>"
      }
       printTreeMove.innerHTML = printEqMove 
       printTreeMove.style["display"] = "flex";
       printTreeMove.style["background-color"] = "#f1dee1";

}
 var oprats = ['+'] // '+' , '-','/'
 var oprand = ['sin'] // 'sin','cos','tan','cot','ln'

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function selectOprat(el , isOprate) {
  var checkedValue = document.getElementById(el);

  if(checkedValue.checked == true)
    isOprate == true ? oprats.push(document.getElementById(el).value) : oprand.push(document.getElementById(el).value);

  if(checkedValue.checked == false)
    isOprate == true ? oprats=oprats.filter(r=> r != el ) : oprand = oprand.filter(r=> r != el );
}
  // function GpTree2(){
    // var tree = {}
    // var printStr = ''
    // var sin = ''
    // for(var i = 1 ; i < 10 ; i++ ){
      // sin = '+'
      // if(i == 1 ) sin  = ``;
// 
      // if(i % 2 == 0 )
          // tree[i] = sin + `X${i}`;
      // else if(i % 2 != 0 && i != 0)
          //  tree[i] = sin + `X${i} ` ;
// 
        // printStr += tree[i]
    // }
// 
    // var printTree=document.getElementById("printTree");
    // printTree.innerText = printStr
    // printTree.style["display"] = "flex";
    // console.log(printStr)
  // }

  function GP(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json(
        // ))
        // .then(json => console.log(json))


  
      arryMath =[];
      Chromosome = {}
      arryMath = convertToArray(document.getElementById("inputValue").value)
      var CountGp = 0 //= document.getElementById("CountGp").value
      CountGp = prompt("Please enter count number for create fx : ", 3);
      if (CountGp == "" ||  CountGp == "0" || isNaN(CountGp) || CountGp < 0 || CountGp == 0 || CountGp == null)
        {
            alert('Please enter valid number');
            return;
        }
      
      var printFx1 = ''
      var printFx2 = ''
      var printFx3 = ''
      var printChromosome = ''
      var printEval = ''
      var printFx = ''
      var printFitness =''
      var printP =''
      var printC =''
      var printR =''
      var printNewChromosome = ''
      var Total = 0 
      var Chromosome = [];
      var FitnesArrayList = [] 
      
      for (var i = 0; i < CountGp; i++) {
          var obj ={}
          var fxStr1 = ''
          var fxStr2 = ''
          var fxStr3 = ''
          var Fitness = 0
          var P =  0
          var fx = ''
          let SumForGp = 0
          for (var j = 0; j < arryMath.length; j++) {
              var randomNum = 0
              if (arryMath[j] == "+" || arryMath[j] == "-")
              {
                fxStr1 = fxStr1 == '' ?   fxStr1 =  fxStr1 : fxStr1 = fxStr1 + arryMath[j]
                fxStr2 = fxStr2 == '' ?   fxStr2 =  fxStr2 : fxStr2 = fxStr2 + arryMath[j]
                fxStr3 = fxStr3 == '' ?   fxStr3 =  fxStr3 : fxStr3 = fxStr3 + arryMath[j] // //For sin Chromosome
                fx = fx == '' ?   fx =  fx : fx = fx + arryMath[j]
                //obj[j] = arryMath[j]; // for create Chromosome 
              }
              else{
                randomNum = Math.floor(Math.random() * 100);
                obj[j] = randomNum; // for create Chromosome 
                var str1 = randomNum * getPreVariable(arryMath[j])
                var str2 = getPreVariable(arryMath[j]) +"("+ randomNum + ")"
                var str3 = "["+getMainVariable(arryMath[j])  +"="+randomNum +"]"
                var Fx = randomNum + getMainVariable(arryMath[j]) 

                fxStr1 = fxStr1 == '' ?   fxStr1 =  str1 : fxStr1 = fxStr1 +  str1
                fxStr2 = fxStr2 == '' ?   fxStr2 =  str2 : fxStr2 = fxStr2 +  str2
                fxStr3 = fxStr3 == '' ?   fxStr3 =  str3 : fxStr3 = fxStr3 +  str3 //For Chromosome
                fx = fx == '' ?   fx =  Fx : fx = fx +  Fx
              }
              
          }
           SumForGp = Math.abs(GetSumForGp(fxStr1));
           Fitness = 1/(1+(SumForGp))
           FitnesArrayList.push(Fitness)
          
           SumForGp = Math.abs(GetSumForGp(fxStr1));
           
           Chromosome.push(obj);//add Chromosome  to array object
           
           printFx = printFx + "Fx["+ (i+1) +"] : "+  fx + "<br>"
           printChromosome = printChromosome + "Chromosome["+ (i+1) +"] : "+  "{"+fxStr3 +"}" + "<br>"
           printEval = printEval +  "Evaluation["+ (i+1) +"] : "+ " ["+fxStr2 +"] " + " [ "+ fxStr1 +" ="+ SumForGp +" ] " + "<br>"
           printFitness = printFitness +  "Fitness["+ (i+1) +"] :" + "1/(1+("+SumForGp+")) = "+Fitness.toFixed(4) + "<br> "
           
        }

        //for calculate Probably 
        let C = []
        Total = GetTotal(FitnesArrayList); 
        for (let t = 1; t <= CountGp; t++) {
          P = FitnesArrayList[t-1] / Total
          C[t] = t == 1 ? P : C[t-1] + P ;
          printP = printP +  "P["+ (t) +"] : "+P.toFixed(3) + "<br> "
          printC = printC +  "C["+ (t) +"] : "+C[t].toFixed(3) + "<br> "
        }

        //Comparison between  R[t] and C[t]  and create  NewCromosom
        let R = []
        let NewCromosom = []
        for (let t = 0; t < CountGp; t++) {
          R[t] = Math.floor(Math.random()*10) / 100
          console.log('R[t] : ' + R[t])
          console.log('C[t] : ' + C[t])
          console.log('C[t+1] : ' + C[t+1])
          console.log( Chromosome[t+1])
          if( R[t]  > C[t] && R[t]  <= C[t+1]  ){
            NewCromosom[t].push(R[t])
            //NewCromosom.push({...Chromosome[t+1]});
          }
          console.log(NewCromosom[t])
          printR = printR +  "R["+ (t) +"] : "+R[t] + "<br> "
          printNewChromosome = printNewChromosome +  "NewCromosom["+ (t) +"] : "+R[t] + "<br> "
        }

        //console.log(C)

        {
          var printChromosomeEl = document.getElementById('printChromosome')
          var printEvalEl = document.getElementById('printEval')
          var printFxEl = document.getElementById('printFx')
          var printFitnessEl = document.getElementById('printFitness')
          var printTotalEl = document.getElementById('printTotal')
          var printPEl = document.getElementById('printP')
          var printCEl = document.getElementById('printC')
          var printREl = document.getElementById('printR')
          var printNewCromosomEl = document.getElementById('printNewCromosom')
          
          printFxEl.innerHTML =   printFx;
          printChromosomeEl.innerHTML =   printChromosome;
          printEvalEl.innerHTML =   printEval;
          printFitnessEl.innerHTML =   printFitness;
          printTotalEl.innerHTML =   "Total = "+Total.toFixed(4);
          printPEl.innerHTML =   printP;
          printCEl.innerHTML =   printC;
          printREl.innerHTML =   printR;
          printNewCromosomEl.innerHTML =   printNewChromosome;

          printFxEl.style["display"] = "flex";
          printChromosomeEl.style["display"] = "flex";
          printEvalEl.style["display"] = "flex";
          printFitnessEl.style["display"] = "flex";
          printTotalEl.style["display"] = "flex";
          printPEl.style["display"] = "flex";
          printCEl.style["display"] = "flex";
          printREl.style["display"] = "flex";
          printNewCromosomEl.style["display"] = "flex";
        }
  }

  function GetTotal(FitnesArrayList){
    let total = 0 ;
    for(var i=0; i<FitnesArrayList.length ; i++)
      total = total + FitnesArrayList[i];
    
    return total;
  }
  function Calculate(){
      Split()
      arryMath =[];
      Chromosome = {}
      arryMath = convertToArray(document.getElementById("inputValue").value)
      var sumEl = document.getElementById('sum')//.innerText = "Sum : " + sum ;
      sumEl.innerText = "Sum of Fx = " + GetSumForFx(arryMath) ;
      sumEl.style["display"] = "flex";
  }
  function GetSumForGp(fx){
    var arryMath = convertToArray(fx)
    // console.log(arryMath)
    // console.log(fx)
    sum = 0;
    sin = '';
    arryMath.map(val => {
          if(val !== '+' && val !== '-'){
              let mainVariable = getMainVariable(val)
              let preVariable = getPreVariable(val)
              let power = getPower(mainVariable)
              var inputVal = 1//document.getElementById(val).value;
              //console.log(sin)
              // console.log('inputVal:'+inputVal)
              // console.log('val:'+val)
              //  console.log('mainVariable:'+ mainVariable)
              //  console.log('preVariable:'+ preVariable)
              //  console.log('sin:'+sin)
              // console.log('power:'+power)
              
              // if(power != 0 && preVariable !=='') inputVal = Math.pow(parseInt(inputVal), power);
              // if(sin == ''  && preVariable !=='') sum = inputVal * preVariable
              // if(sin == '-' && preVariable !=='') sum = sum - (inputVal * preVariable)
              // if(sin == '+' && preVariable !=='') sum = sum + (inputVal * preVariable)
              
              if(power != 0 && preVariable =='1') mainVariable = Math.pow(parseInt(mainVariable), power);
              if(sin == ''  && preVariable =='1') sum = parseInt(mainVariable) 
              if(sin == '-' && preVariable =='1') sum = sum - parseInt(mainVariable)  
              if(sin == '+' && preVariable =='1') sum = sum + parseInt(mainVariable) 
              //console.log('sum : ' + sum);
          }

          if(val == '+' || val == '-') sin = val

      })
      return sum;
  }
  function GetSumForFx(arryMath){
    sum = 0;
    sin = '';
    arryMath.map(val => {
          if(val !== '+' && val !== '-'){
              let mainVariable = getMainVariable(val)
              let preVariable = getPreVariable(val)
              let power = getPower(mainVariable)
              var inputVal = document.getElementById(val).value;
              //console.log(sin)
               console.log('inputVal:'+inputVal)
               console.log('val:'+val)
               console.log('mainVariable:'+mainVariable)
               console.log('preVariable:'+preVariable)
              console.log('sin:'+sin)
              // console.log('power:'+power)
              
              if(power != 0 && preVariable !=='') inputVal = Math.pow(parseInt(inputVal), power);
              if(power != 0 && preVariable =='') mainVariable = Math.pow(parseInt(mainVariable), power);

              if(sin == ''  && preVariable !=='') sum = inputVal * preVariable
              if(sin == ''  && preVariable =='') sum = parseInt(mainVariable) 

              if(sin == '-' && preVariable !=='') sum = sum - (inputVal * preVariable)
              if(sin == '+' && preVariable !=='') sum = sum + (inputVal * preVariable)
              
              if(sin == '-' && preVariable =='') sum = sum - parseInt(mainVariable)  
              if(sin == '+' && preVariable =='') sum = sum + parseInt(mainVariable) 
              console.log('------------------------------sum:'+sum)
          }

          if(val == '+' || val == '-') sin = val

      })
      return sum;
  }

  function Split(){
    arryMath =[];
    arryMath = convertToArray(document.getElementById("inputValue").value)
    splitValue(arryMath)
  }
  function Clear(){
    // var span = document.getElementById('span');
    // var div = document.getElementById('div');
    // div.style["display"] = "none";
    document.getElementById("resultValue").innerHTML = '';
    document.getElementById("printVar").innerHTML = '';
    document.getElementById("printVar").style.display = "none"
    document.getElementById("sum").style.display = "none"
    var divForInput = document.getElementById("divForInput")
    console.log(divForInput)
     //divForInput.style.display = "none"
     var elements = document.getElementsByClassName("input-group input-group-sm mb-3");
      for(var i = 0; i < elements.length; i++) {
          elements[i].style.display = "none"
      }

    document.getElementById('inputValue').innerText ='';
    
  }
  function convertToArray(value){
      var a ='';
      var arryMath = [];
      let index = 0 ;
      var sin = '';
      for(var i=0; i<value.length; i++){
        if(i==0 && value[i] =='-')
          sin = '-';
        else if(value[i] == '+' || value[i] =='-'){
          arryMath.push(value.substring(index,i));
          arryMath.push(value[i]);
        index = i + 1;
        a = '';
        
        }
        else
          a = a + value[i];
      }//for 
      if(a.length>0) arryMath.push(a);
      return arryMath;
  }
  function splitValue(arryMath){
      let isMath = true;
      let printVar='';
      var result = document.getElementById('result');
      var printVarEl = document.getElementById('printVar');
      arryMath.map(val => {
          if((val !=='+') && (val !=='-')){
              let mainVariable = getMainVariable(val);
              let preVariable = getPreVariable(val);
              if(chekForValid(preVariable , mainVariable) == false)  isMath = false 
              printVar = printVar +   preVariable+" : "+mainVariable+" : ( "+isMath+" ) " + "<br>"
              GenerateInputEl(val,result)
          }
          else
            printVar = printVar +   val+"("+chekForValid(val,'')+") "+"<br>"
      })
      document.getElementById("resultValue").innerHTML = isMath;
      document.getElementById("printVar").innerHTML = printVar
      document.getElementById("printVar").style.display = "flex"
  }
  function GenerateInputEl(val,result){
    var span = document.createElement('span');
    span.innerHTML  = getMainVariable(val) + " : ";
    span.className = 'input-group-text sizeOfLabel';
    
    if(!document.getElementById(val)){
      var div = document.createElement('div');
      div.className = "input-group input-group-sm";
      // div.style["padding-top"] = "2px";
      div.style["padding"] = "2px 5px 2px 5px ";
      // div.style["padding-left"] = "2px";
      // div.style["padding-right"] = "2px";
      // div.style["padding-bottom"] = "2px";
      div.id = "divForInput"

      var inputValue = document.createElement('input');
      inputValue.type = 'text';
      inputValue.id = val;
      inputValue.value = 2;
      inputValue.className = 'form-control form-control-sm float-start';
      //inputValue.style["font-size"] = "x-large";


      div.appendChild(span);
      div.appendChild(inputValue);
      result.appendChild(div)
    }
  }
  function getMainVariable(val){
    return val.substring(val.indexOf('x'),val.length);
  }

  function getPreVariable(val){
    if (val.substring(0,val.indexOf('x')) == '') return '';

    return val.substring(0,val.indexOf('x'));
  }
  function getPower(val){
    if(val.indexOf('^') == -1) return 0;
    return val.substring(val.indexOf('^')+1,val.length)
  }
  function chekForValid(preVariable,mainVariable){
    preVariable = preVariable.replace("-" ,"")
            preVariable = preVariable.replace("+" ,"")
            preVariable = preVariable.replace("0" ,"")
            preVariable = preVariable.replace('1' ,"")
            preVariable = preVariable.replace('2' ,"")
            preVariable = preVariable.replace('3' ,"")
            preVariable = preVariable.replace('4' ,"")
            preVariable = preVariable.replace('5' ,"")
            preVariable = preVariable.replace('6' ,"")
            preVariable = preVariable.replace('7' ,"")
            preVariable = preVariable.replace('8' ,"")
            preVariable = preVariable.replace('9' ,"")

            mainVariable = mainVariable.replace('x' ,"")
            mainVariable = mainVariable.replace("^" ,"")
            mainVariable = mainVariable.replace("0" ,"")
            mainVariable = mainVariable.replace('1' ,"")
            mainVariable = mainVariable.replace('2' ,"")
            mainVariable = mainVariable.replace('3' ,"")
            mainVariable = mainVariable.replace('4' ,"")
            mainVariable = mainVariable.replace('5' ,"")
            mainVariable = mainVariable.replace('6' ,"")
            mainVariable = mainVariable.replace('7' ,"")
            mainVariable = mainVariable.replace('8' ,"")
            mainVariable = mainVariable.replace('9' ,"")

            //console.log(mainVariable )
            if(preVariable == '' && mainVariable == '') 
                return true;
            else if ((preVariable != '' && preVariable == 'sin'|| preVariable == 'cot' ||
                     preVariable == 'ln' || preVariable == 'cos'|| preVariable == 'tan')&&(
                      mainVariable != '' && mainVariable == 'sin'|| mainVariable == 'cot' ||
                      mainVariable == 'ln' || mainVariable == 'cos'|| mainVariable == 'tan'
                     ))
                    return true;

            return false;
        }
          
          
          
          
          