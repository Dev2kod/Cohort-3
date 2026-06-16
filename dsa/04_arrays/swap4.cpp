#include<iostream>
using namespace std;

void swap4(int arr[],int n){
    int i = 0;
    int j = n-1;

    while(i<j){
        arr[i] = arr[i]+arr[j];
        arr[j] = arr[i]-arr[j];
        arr[i] = arr[i]-arr[j];
        i++;
        j--;
    }
}

int main(){
    int arr[] = {1,2,3,4,5,6,7,8,9};
    swap4(arr,9);
    for (int i = 0; i < 9; i++)
    {
        cout<<arr[i];
    }
    
}