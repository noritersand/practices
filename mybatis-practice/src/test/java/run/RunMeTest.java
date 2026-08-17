package run;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class RunMeTest {

    @Test
    public void testPrintAnything() {
        RunMe runMe = new RunMe();
        assertNotNull(runMe);
        runMe.printAnything();
    }
}
