#include <iostream>
using namespace std;

int main()
{

    string a = "devesh";
    int freq[26] = {0};

    for (int i = 0; a[i] != '\0'; i++)
    {
        char ch = a[i];
        int index = ch - 'a';
        freq[index]++;
    }

    for (int i = 0; i < 26; i++)
    {
        char ch = 'a' + i;
        cout << ch << " " << freq[i] << endl;
    }
}