#include<iostream>
using namespace std;

int main(){
    int arr [3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int max = 3;
    int rowmin = 0;
    int colmin = 0;
    int colmax = 2;
    int rowmax = 2;

    cout<<"PRINTING SPIRALLY"<<endl;

    
    for (int i = rowmin; i <=colmax; i++)
    {

        cout<<arr[colmin][i];
    }
    cout<<endl;
     rowmin++;
   
   
    for (int i = rowmin; i <=rowmax; i++)
    {
        cout<<arr[i][colmax];
    }
    cout<<endl;
    colmax--;   
   
    for (int i = colmax; i >=colmin ; i--)
    {
        cout<<arr[rowmax][i];
    }
    rowmax--;
    
    for (int i = rowmax; i >= rowmin; i--)
    {
        cout<<arr[i][colmin];
    }
    colmin++;

    for (int i = colmin; i <= colmax; i++)
    {
        cout<<arr[rowmin][i];
    }
    rowmin++;
    
   
}