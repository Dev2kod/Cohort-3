#include<iostream>
using namespace std;

int main(){

int arr[3][3]={{0,0,0},{0,0,0},{0,0,0}};
int m = 3;
int n = 3;
int ans = -1;

for (int i = 0; i < m; i++)
{
    int sum = 0;
    for (int j = 0; j<n; j++)
    {
        sum+=arr[i][j];
    }
    if(sum==3){
        ans = 1;
        break;
    }
    if(sum>0&&sum<3){
        ans = 0;
    }
}


cout<<ans; 
}