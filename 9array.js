let a= [1,2,[3,4,9],5,6,[7,8]];
for(let i = 0; i < a.length; i++){

    if(a[i].length != undefined){

        if(a[i].length == 0)
        {
            let x = i;
            while(x < a.length -1)
            {

                a[x] = a[x+1];
                x += 1;
            }
            a.length -= 1;
        } 
        else
        {


            let t= a[i][0], l = a.length;
            let j = 1;
            while(j <= a[i].length - 1){

                a[i][j-1] = a[i][j];
                j++;

            }
            a[i].length -= 1;
            while( l >i){
                a[l] = a[l-1];

                l--;
            }

            a[l] = t;
        }
    }

   
}

console.log(a);

