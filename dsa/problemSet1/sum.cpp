#include<iostream>
using namespace std;


int main(){
    string s = "1234";
    int count = s.size();
    int sum = 0;
    for (int i = 0; i < count; i++)
    {
        sum += s[i]-'0';
    }
    
    cout<<sum;
}