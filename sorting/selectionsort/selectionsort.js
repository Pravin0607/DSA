function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++)
        {
            let minindex=i;
            for(let j=i+1;j<n;j++)
            {
                if(arr[minindex]>=arr[j])
                {
                    minindex=j;
                }
            }

            if(i!=minindex)
            {
                [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
            }
        }
}
let arr1=[64,25,12,22,11]
console.log(`unsorted : ${arr1}`)
selectionSort(arr1);
console.log(`sorted : ${arr1}`)
console.log(`length :${arr1.length}`)