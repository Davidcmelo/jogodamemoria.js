class util {
    static timeout ( tempo )  {
        return new Promise (resolve => setTimeout(resolve, tempo))
    }
}