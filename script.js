function Student(){

    var maths,english,sst,science,punjabi,sum,per,result;

    english = parseInt(document.getElementById("english").value);
    maths = parseInt(document.getElementById("maths").value);
    sst = parseInt(document.getElementById("sst").value);
    science = parseInt(document.getElementById("science").value);
    punjabi = parseInt(document.getElementById("punjabi").value);

    sum = maths + english + sst + science + punjabi;
    per = sum/5;
    
        if(per>=90)
        {
            result = "A+";
        }
    
        else if(per>=80 && per<90)
        {
            result = "A";
        }
    
        else if(per>=70 && per<80)
        {
            result = "B+";
        }
    
        else if(per>=60 && per<70)
        {
            result = "C+";
        }

        else if(per>=50 && per<60)
        {
            result ="C";
        }

        else if(per>=40 && per<50)
        {
            result = "D";
        }

        else
        {
            result = "F";
        }

        
    
        document.getElementById("number").value = sum;
        document.getElementById("percentage").value = per;
        document.getElementById("grade").value = result;

}