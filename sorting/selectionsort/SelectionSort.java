import java.util.Arrays;
public class SelectionSort
{
    public static void  main(String args[])
    {
        int arr[]=new int[]{64,25,12,22,11};
        System.out.println("Unsorted : "+Arrays.toString(arr));

        for(int i=0;i<arr.length-1;i++)
        {
            int minIndex=i;
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[minIndex]>=arr[j])
                {
                    minIndex=j;
                }
            }
            if(minIndex!=i)
            {
                int temp=arr[i];
                arr[i]=arr[minIndex];
                arr[minIndex]=temp;
            }
        }
        System.out.println("Sorted : "+Arrays.toString(arr));
    }
}