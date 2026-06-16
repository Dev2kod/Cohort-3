#include<iostream>
using namespace std;

int search(int arr[],int n, int k){
    for (int i = 0; i < n; i++)
    {
        if(arr[i]==k){
            return 1;
        }
    }
    return 0;
}

int main(){

    int arr[] = {1,2,3,4,4,5,5,6,7,8,6,7,8,0};

    int result = search(arr,14,3);

    cout<<result;


}