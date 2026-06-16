#include<iostream>
using namespace std;

int main(){

int arr[4][4]={{1,2,3,1},{3,1,3,1},{1,6,1,1},{1,0,2,1}};
int m = 4;
int n = 4;
int max = 0;
int row = 0;

for (int i = 0; i < m; i++)
{
    int one = 0;
    for (int j = 0; j<n; j++)
    {
        if(arr[i][j]==1){
            one++;
        }
    }
    if(one>max){
        max = one;
        row = i;
    }
}

cout<<"max num of 1 in rows is "<<max<<endl<<endl;
cout<<"max 1 row: row "<<row; 
}