#include<iostream>
using namespace std;

int freq(int arr[],int n,int k){
    int freq = 0;

    for (int i = 0; i < n; i++)
    {
        if(arr[i]==k){
            freq++;
        }
    }
    

    return freq;

}

int main(){

    int arr[]={1,2,0,5,0,0,2,1,5};
    cout<<freq(arr,9,0)
    
}