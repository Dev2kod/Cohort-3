#include<iostream>
using namespace std;

void sort(int arr[],int n){
    for (int i = 0; i < n; i++)
    {
        int max = 0;
        int index = 0;
        for (int j = 0; j <n-i ; j++)
        {
            if(arr[j]>max){
                index = j;
                max = arr[j];
            }
        }
        swap(arr[index],arr[n-1-i]);
    }
    
}

int main(){

    int arr[] = {0,9,8,7,6,5,4};    
    sort(arr,7);

    for (int i = 0; i < 7; i++)
    {
        cout<<arr[i]<<" ";
    }
    
}