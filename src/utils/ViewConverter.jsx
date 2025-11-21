const ViewConverter=(num)=>{
        if(num>=1000000){
            return Math.floor(num/10000000)+'M'
        }
        else if(num >=1000){
             return Math.floor(num/1000)+'K'
        }
        else{
            return num
        }
           

}
export default ViewConverter