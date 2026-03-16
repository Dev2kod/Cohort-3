#include<bits/stdc++.h>
using namespace std;


int reverse(int num){
    int rev= 0;
    while(num>0){
        rev = rev*10+num%10;
        num = num/10;
    }
    return rev;
}

int main(){

    int num = reverse(1002);
    cout<<num;
    return 0;
}