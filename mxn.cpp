#include <iostream>
#include <cmath>

using namespace std;

int find_k_value(int n) {
    return ceil(pow(n, 1/3));
}

int main() {
    cout << find_k_value(100);
}