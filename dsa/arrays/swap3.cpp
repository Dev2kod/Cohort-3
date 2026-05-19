#include<iostream>
using namespace std;

void move(int arr[],int n){
    for (int i = 1; i < n; i++)
    {
        arr[i] = arr[i-1]+arr[i];
        arr[i-1] = arr[i] - arr[i-1];
        arr[i] = arr[i]-arr[i-1];
        i++;
    }
    }

int main(){

int arr[] = {1,2,3,4,5,6,7,8,9};
move(arr,9);
for(int i = 0; i < 9; i++)
{
    cout<<arr[i];
}

}