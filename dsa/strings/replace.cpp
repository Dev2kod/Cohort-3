#include<iostream>
using namespace std;

int main(){

    string name = "devesh";

    for (int i = 0; i < name.size(); i++)
    {
        if(name[i]=='e'){
            name[i] = 'a';
        }
    }

    cout<<name;
    
}