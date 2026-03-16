    #include<bits/stdc++.h>
    using namespace std;

    int factorial(int num){
        int ans = 1;
        while(num>0){
            ans = ans*num;
            num--;
        }
        return ans;
    }

    int ncr(int n,int r){
        return factorial(n)/(factorial(r)*factorial(n-r));
    }


    int main(){

        int ans = ncr(8,6);
        cout<<ans;

        return 0;
    }