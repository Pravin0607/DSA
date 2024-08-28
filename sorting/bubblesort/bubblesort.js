// function for bubble sort
//asc = true or false
function bubblesort(arr,asc=true)
{
    let n=arr.length;
    for(let i=0;i<n-1;i++)
    {
        let swapped=false;
        for(let j=0;j<n-i-1;j++)
        {
                if((asc && (arr[j]>=arr[j+1])) || (!asc && (arr[j]<=arr[j+1])))
                {
                    
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    swapped=true;
                }
        }
        // if no swapping then array is already sorted
        if(!swapped) break;
    }
}

let arr=[34,8,2,90,3,23,1,67];
console.log(`unsorted : ${arr}`)
// not passing second parameter because its default to true
bubblesort(arr);
console.log(`sorted ascending : ${arr}`)

bubblesort(arr,false)
console.log(`sorted descending : ${arr}`)
