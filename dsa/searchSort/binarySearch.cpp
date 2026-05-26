#include<iostream>
using namespace std;

int binarySearch(int arr[],int n,int k){
    int l = 0;
    int r = n-1;
    int mid = (l+r)/2;
    int ans = -1;
    while (l<=r)
    {
        
        if(arr[mid]==k){
            ans = mid;
            return ans;
        }
        if(arr[mid]>k){
            r=mid-1;
            mid = (l+r)/2;
        }
        if(arr[mid]<k){
            l=mid+1;
            mid = (l+r)/2;
        }

    }
    
    return ans;
}


int main(){

    int arr[] = {1,2,3,4,5,6,7,8,9,11,15,23,64,97};

    int result = binarySearch(arr,14,11);

    cout<< result;
}