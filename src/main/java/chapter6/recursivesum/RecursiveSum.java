package chapter6.recursivesum;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class RecursiveSum {

    @Test
    public void _1부터_N_까지의_합을_계산하는_반복함수와_재귀_함수() {

        Assertions.assertEquals(sum(10), 55);
        Assertions.assertEquals(sum(10), recursiveSum(10));
    }

    public int sum(int n) {
        int ret = 0;
        for (int i = 1; i <= n; i++) {
            ret += i;
        }
        return ret;
    }

    int recursiveSum(int n) {
        if (n == 1) {
            return 1;
        }
        return n + recursiveSum(n - 1);
    }
}
