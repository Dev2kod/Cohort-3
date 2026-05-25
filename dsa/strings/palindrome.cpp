#include<iostream>
using namespace std;

int main()
{
    string a = "racecar";
    int n = a.length();
    bool isPalindrome = true;

    for (int i = 0; i < n / 2; i++)
    {
        if (a[i] != a[n - 1 - i])
        {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome)
    {
        cout << "YES";
    }
    else
    {
        cout << "NO";
    }

    return 0;
}