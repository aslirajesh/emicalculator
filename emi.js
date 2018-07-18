body{
    margin: 0px;
    padding:0px;
}
div#nav_bar {
    width: 100%;
    background-color: #4285F4;
    height: 55px;
}

div#icon_box {
    position: relative;
    //left: 19%;
    //border: 1px solid;
    height: 100%;
    width: 50px;
    background-color: white;
    background-image: url("calc.png");
    background-size: contain;
}
@media screen and (max-width: 733px) {
    #icon_box{
        left: 1%;
    }
}
@media screen and (min-width: 733px) {
    #icon_box{
        left: 19%;
    }
}
div#h_name_box {
    position: relative;
    //left: 25%;
    top: -100%;
    width: 300px;
    background-color: white;
    color: #00AEFF;
    text-align: center;
    font-size: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed;
    font-family: 'Kaushan Script', cursive;
}
@media screen and (max-width: 733px) {
    #h_name_box{
        left: 15%;
    }
}
@media screen and (min-width: 733px) {
    #h_name_box{
        left:25%;
    }
}

@media screen and (min-width: 733px) {
#main_body {
        position: relative;
        width: 62%;
        margin: auto;
        margin-top: 50px;
        background-color: #EEEEEE;
        border-radius: 10px;
        padding-top: 15px;
        margin-top: 20px;
    }
}
@media screen and (max-width: 733px) {
    #main_body {
        width: 100%;
        margin-top: 20px;
    }
}
div#main_body_inner {
    position: relative;
    width: 96%;
    margin: auto;
    //border: 2px dashed #7f7f66;
    padding: 10px;
   
}
@media screen and (max-width: 733px) {
    #icon_box{
        left: 1%;
    }
}
@media screen and (min-width: 733px) {
    #main_body_inner{
        border: 2px dashed #7f7f66;
    }
}
.loan_type{
    position: relative;
    padding: 10px;
    display: inline-block;
    background-color: #0099C6;
    margin: -2px;
    border-right: 2px solid #4285F4;
    font-size: 20px;
    font-family: 'Slabo 27px', serif;
    color: white;
}
@media screen and (max-width: 400px) {
    .loan_type{
        display: list-item;
    }
}
#personal_loan{background-color: #16D620}

div.input_name {
    position: relative;
    left: 20%;
    font-size: 20px;
}
@media screen and (max-width: 733px) {
    .input_name{
        top: 17px;
        width: 57%;
    }
}
@media screen and (min-width: 733px) {
    .input_name{
        top: 30px;
        width: 20%;
    }
}
input.number_field {
    position: relative;
    //left: 40%;
    font-size: 20px;
    padding: 5px;
    width: 30%;
    outline: none;
    border:2px solid;
    border-bottom-left-radius: 14px;
    border-top-left-radius: 14px;
    padding-left: 20px;
}
@media screen and (max-width: 733px) {
    input.number_field{
       left: 20%;
       top: 18px;
    }
}
@media screen and (min-width: 733px) {
    input.number_field{
        left: 40%;
    }
}

div.r_sings {
    position: relative;
    border: 2px solid black;
    border-left: 0;
    padding: 4.5px;
    padding-left: 18px;
    font-size: 20px;
    width: 2%;
    border-bottom-right-radius: 14px;
    border-top-right-radius: 14px;
}
@media screen and (max-width: 733px) {
    .r_sings{
       top: -19px;
       left: 56%;
    }
}
@media screen and (min-width: 733px) {
    .r_sings{
        top: -37px;
        left: 72%;
    }
}
input[type=range] {
    -webkit-appearance: none;
    width: 94%;
    margin-left: 3%; 
}
input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 8px;
    background: #0099C6;
    border-radius: 3px;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #16D620;
    margin-top: -4px;
}
input[type=range]:focus {
    outline: none;
}
.input_name_t {
    position: relative;
    font-size: 20px;
    margin-left: 10%;
    margin-top: 40px;
    
}
@media screen and (max-width: 733px) {
    .input_name_t{
       width: 30%;
       top: -24px;
        left: 10%;
        margin-bottom: 5px;
    }
}
@media screen and (min-width: 733px) {
    .input_name_t{

        width: 10%;
    }
}
input#input_time {
    position: relative;
    top: -29px;
    left: 20%;
    font-size: 20px;
    width: 35px;
    padding: 5px;
    padding-left: 10px;
    border:2px solid;
    outline: 0;
    border-radius: 14px;
}
input[type=radio] {
    position: relative;
    top: -30px;
    left: 21%;
    margin: -1px;
}
input[type=radio].radio1:after {
  display: block;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  content: "Yr";
  //background-color:#CCCCCC;
  padding-top: 9px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
}
input[type=radio].radio2:after {
  display: block;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  content: "Mo";
  //background-color:#CCCCCC;
  padding-top: 9px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
}
input[type=radio].radio1{
    width:50px;
    height:27px;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    
}
input[type=radio].radio2{
    width:50px;
    height:27px;
    display: inline-block;
    text-align: center;
    font-size: 18px;

}
input:checked + label {
        background-color: green;
        color: #FFF;
        box-shadow: green;
        border-color: green;
        z-index: 1;

}
hr{
    margin-top: 40px;
}
@media screen and (min-width: 733px) {
    div#second_box {
        position: relative;
        border: 1px solid;
        width: 100%;
        height: 400px;
        margin-top: 10px;
    }
}
@media screen and (min-width: 733px) {
    div#piechart {
    position: relative;
    display: inline-block;
    width: 48%;
    height: 99%;
    }
}
@media screen and (max-width: 733px) {
    div#piechart {
        width: 100%;
        height: 340px;
    }
}
@media screen and (min-width: 733px) {
    div#emi_text {
        position: relative;
        display: inline-block;
        width: 50%;
        height: 100%;
        border-right: 0.5px solid black;
    }
}
@media screen and (max-width: 733px) {
    div#emi_text {
        width: 100%;
        height: 340px;
    }
}

.li {
    position: relative;
    display: table;
    width: 100%;
    height: 33%;
}
div#li2 {
    border-top: 1px dashed;
    border-bottom: 1px dashed;
}
.li_text {
    position: relative;
    width: 50%;
    height: 20%;
   // border: 1px solid;
    margin: auto;
    text-align: center;
    font-size: 17px;
    margin-top: 5%;
}

.value_box {
    position: relative;
    top: 0px;
    width: 40%;
    height: 35%;
    margin: auto;
    margin-top: 1%;
    border-radius: 10px;
    color: white;
    font-size: 28px;
    background-color: #3366CC;
    text-align: center;
    padding-top: 1%;
    box-shadow: 0px 10px 30px black;
}
div#table_div {
    border: 0.5px solid black;
    width: 100%;
    /* height: 300px; */
    margin-top: 5px;
}
table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
}
tr{
    background-color: wheat;
}
td{
    border: 0.2px solid;
}
#table_head {
    height: 60px;
}
#table_head_y{
    background-color: #7AB3D0;
}
#table_head_p{
    background-color: #0072AA;
}
#table_head_i{
    background-color: #ED8C2B;
}
#table_head_t{
    background-color: #B8204C;
}
#table_head_r{
    background-color: #20BB5E;
}

.plus {
    color: red;
    font-size: 20px

}
.year_head{
    background-color: #EEEEEE;
}

.tohide{
    display: none;
}

#chart_div{
    width: 100%;
}
