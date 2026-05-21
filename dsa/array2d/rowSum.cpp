#include<iostream>
using namespace std;

int main(){

int arr[3][3]={{1,2,3},{3,3,1},{6,1,1}};
int m = 3;
int n = 3;
int max = 0;
int row = 0;

for (int i = 0; i < m; i++)
{
    int sum = 0;
    for (int j = 0; j<n; j++)
    {
        sum = sum+arr[i][j];
    }
    if(sum>max){
        max = sum;
        row = i;
    }
}

cout<<"max sum of rows is "<<max<<endl<<endl;
cout<<"max sum row: row "<<row; 
}