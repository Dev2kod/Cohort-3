// detect smallest and swap till end of array

#include<iostream>
using namespace std;

void sort(int arr[],int n){
    for (int i = 0; i < n; i++)
    {
        int smallest = __INT_MAX__;
        int index = i;

        for (int j = i; j < n; j++)
        {
            if(arr[j]<smallest){
            smallest = arr[j];
            index = j;
            }
        }
        swap(arr[i],arr[index]);
    }
}

int main(){
    int arr[9] = {2,65,8,4,2,6,8,7,9};

    sort(arr,9);
    for (int i = 0; i < 9; i++)
    {
        cout<<arr[i]<<" ";
    }
}