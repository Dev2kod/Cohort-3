#include<iostream>
using namespace std;

int main(){

    string x = "messi";
    string temp = x;
    int i= 0;
    int j=x.size()-1;
    
    while(i<j){
        swap(x[i],x[j]);
    }

    cout<<x;

}