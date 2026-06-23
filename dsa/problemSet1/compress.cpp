#include <iostream>
using namespace std;

int main()
{

    string s = "aaaabbbbbcccddd";
    int i = 0, j = 0;
    int count = 0;
    string ans = "";

    while (j < s.size())
    {
        if (s[i] == s[j])
        {
            j++;
            count++;
        }
        else
        {
            ans += (s[i]);
            ans += to_string(count);
            count = 0;
            i = j;
        }
    }
    ans += (s[i]);
    ans += to_string(count);

    cout << ans;
}