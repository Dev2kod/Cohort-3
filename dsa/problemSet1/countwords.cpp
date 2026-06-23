#include<iostream>
using namespace std;

int words(string s){
    int count = 1;

    for (int i = 0; i < s.length(); i++)
    {
        if(s[i] == ' '){
            count++;
        }
    }
    
    
    return count;
}

int main(){
    cout<<words("devesh never went out to play");
}