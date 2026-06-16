#include <iostream>
using namespace std;

int main()
{

    string a = "devesh";
    int size = 0;
    int i = 0;
    while (a[i] != '\0')
    {
        size++;
        i++;
    }
    cout << size;
}