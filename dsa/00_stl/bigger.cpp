#include <iostream>
using namespace std;

int main()
{
    int a,b;
    cout << "give 2 numbers as input" << endl;
    cin >>  a;
    cin >>  b;

    if (a > b)
    {
        cout << "bigger number is " << a;
    }
    else
    {
        cout << "bigger number is " << b;
    }
}