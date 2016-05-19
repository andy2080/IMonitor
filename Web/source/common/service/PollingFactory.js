export function PollingFactory($timeout){
    return function polling (fn, clock, isAsync) {
        if(isAsync){
            $timeout(()=>{
                fn().then(()=>polling(fn, clock, isAsync));
            }, clock);
        }else{
            $timeout(()=>{
                fn();
                polling(fn, clock, isAsync);
            }, clock);
        }
    }
}
PollingFactory.$inject = ['$timeout'];