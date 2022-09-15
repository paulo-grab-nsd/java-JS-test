import javax.script.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import org.graalvm.polyglot.Context;


class Main {
  public static void main(String[] args) throws Exception{
    ScriptEngineManager manager = new ScriptEngineManager();
    ScriptEngine engine = manager.getEngineByName("JavaScript");
    engine.eval(Files.newBufferedReader(Paths.get("script.js"), StandardCharsets.UTF_8));
    Invocable inv = (Invocable) engine;
    // call function from script file
    inv.invokeFunction("print", "NASKFNAJNFJSN");
    /*
    Context context = Context.newBuilder("js").allowIO(true).build();
    //Source source = Source.newBuilder("js", "42", "mysource.js").build();
    context.eval("js", "load('script.js');");
    Invocable ins = (Invocable) context.getEngine();
    ins.invokeFunction("print","AJNKCNJANSCJNASJCNSJKLA");
    //context.eval("js","funky","WONGUS");
    context.close();
    System.out.println("WAGGGA");
    */
  }
}