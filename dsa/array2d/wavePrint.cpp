#include<iostream>
using namespace std;

int main(){

    int arr[4][4] = {{1,2,3,4},{5,6,7,8},{1,2,3,4},{5,6,7,8}};
    int n =4;
    int m =4;
 
    for (int i = 0; i < n; i++)
    {
        if (i%2==0)
        {
            for (int j = 0; j < m; j++)
            {
                cout<<arr[i][j];
            }
        }
        else{
            for (int j = m-1; j >= 0; j--)
            {
                cout<<arr[i][j];
            }
        }
    }
    
}