#include<iostream>
using namespace std;

int main(){
    int arr[]= {1,2,3,4,5,6,1};
    int largest = 0;
    int position = 0;
    for (int i = 0; i < 7; i++)
    {
        if(arr[i]>largest){
            largest = arr[i];
            position = i;
        }
    }

    cout<<largest;
    cout<<position;
}