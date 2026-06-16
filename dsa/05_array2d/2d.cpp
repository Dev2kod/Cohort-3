#include<iostream>
using namespace std;

int main(){

    int arr[3][3]={};
    
    cout<<"array input"<<endl;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout<<"arr["<<i<<","<<j<<"]:";
            cin>>arr[i][j];
            cout<<endl;
        }
    }   

    cout<<"ARRAY OUTPUT"<<endl;
    cout<<"[";
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
    cout<<"]";
    


}