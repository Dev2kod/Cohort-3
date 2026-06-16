#include<bits/stdc++.h>
using namespace std;

int fact(int num){
    int f = 1;
    while(num>0){
        f = num*f;
        num--;
    }
    return f;
}

int main(){
    int factorial = fact(4);
    cout<<factorial;
    return 0;
}