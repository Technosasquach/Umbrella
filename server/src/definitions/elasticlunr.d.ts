/** Declaration file generated by dts-gen */

export = elasticlunr;

declare function elasticlunr(config: any): any;

declare namespace elasticlunr {
    class Configuration {
        constructor(config: any, fields: any);

        addAllFields2UserConfig(bool: any, expand: any, fields: any): void;

        buildDefaultConfig(fields: any): void;

        buildUserConfig(config: any, fields: any): void;

        get(): any;

        reset(): void;

    }

    class DocumentStore {
        constructor(save: any);

        addDoc(docRef: any, doc: any): void;

        addFieldLength(docRef: any, fieldName: any, length: any): void;

        getDoc(docRef: any): any;

        getFieldLength(docRef: any, fieldName: any): any;

        hasDoc(docRef: any): any;

        isDocStored(): any;

        removeDoc(docRef: any): void;

        toJSON(): any;

        updateFieldLength(docRef: any, fieldName: any, length: any): void;

        // static load(serialisedData: any): any;

    }

    class EventEmitter {
        constructor();

        addListener(...args: any[]): void;

        emit(name: any, ...args: any[]): void;

        hasHandler(name: any): any;

        removeListener(name: any, fn: any): void;

    }

    class Index {
        constructor();

        addDoc(doc: any, emitEvent?: any): void;

        addField(fieldName: any): any;

        coordNorm(scores: any, docTokens: any, n: any): any;

        fieldSearch(queryTokens: any, fieldName: any, config: any): any;

        fieldSearchStats(docTokens: any, token: any, docs: any): void;

        getFields(): any;

        idf(term: any, field: any): any;

        mergeScores(accumScores: any, scores: any, op: any): any;

        off(name: any, fn: any): any;

        on(...args: any[]): any;

        removeDoc(doc: any, emitEvent: any): void;

        removeDocByRef(docRef: any, emitEvent: any): void;

        saveDocument(save: any): any;

        search(query: any, userConfig?: any): any;

        setRef(refName: any): any;

        toJSON(): any;

        updateDoc(doc: any, emitEvent: any): void;

        use(plugin: any, ...args: any[]): void;

        // static load(serialisedData: any): any;

    }

    class InvertedIndex {
        constructor();

        addToken(token: any, tokenInfo: any, root: any): void;

        expandToken(token: any, memo: any, root: any): any;

        getDocFreq(token: any): any;

        getDocs(token: any): any;

        getNode(token: any): any;

        getTermFrequency(token: any, docRef: any): any;

        hasToken(token: any): any;

        removeToken(token: any, ref: any): void;

        toJSON(): any;

        // static load(serialisedData: any): any;

    }

    class Pipeline {
        constructor();

        add(...args: any[]): void;

        after(existingFn: any, newFn: any): void;

        before(existingFn: any, newFn: any): void;

        get(): any;

        remove(fn: any): void;

        reset(): void;

        run(tokens: any): any;

        toJSON(): any;

        // static getRegisteredFunction(label: any): any;

        // static load(serialised: any): any;

        // static registerFunction(fn: any, label: any): void;

        // static warnIfFunctionNotRegistered(fn: any): void;

    }

    class SortedSet {
        constructor();

        add(...args: any[]): void;

        clone(): any;

        forEach(fn: any, ctx: any): any;

        indexOf(elem: any): any;

        intersect(otherSet: any): any;

        locationFor(elem: any): any;

        map(fn: any, ctx: any): any;

        toArray(): any;

        toJSON(): any;

        union(otherSet: any): any;

        // static load(serialisedData: any): any;

    }

    const defaultStopWords: {
        "": boolean;
        a: boolean;
        able: boolean;
        about: boolean;
        across: boolean;
        after: boolean;
        all: boolean;
        almost: boolean;
        also: boolean;
        am: boolean;
        among: boolean;
        an: boolean;
        and: boolean;
        any: boolean;
        are: boolean;
        as: boolean;
        at: boolean;
        be: boolean;
        because: boolean;
        been: boolean;
        but: boolean;
        by: boolean;
        can: boolean;
        cannot: boolean;
        could: boolean;
        dear: boolean;
        did: boolean;
        do: boolean;
        does: boolean;
        either: boolean;
        else: boolean;
        ever: boolean;
        every: boolean;
        for: boolean;
        from: boolean;
        get: boolean;
        got: boolean;
        had: boolean;
        has: boolean;
        have: boolean;
        he: boolean;
        her: boolean;
        hers: boolean;
        him: boolean;
        his: boolean;
        how: boolean;
        however: boolean;
        i: boolean;
        if: boolean;
        in: boolean;
        into: boolean;
        is: boolean;
        it: boolean;
        its: boolean;
        just: boolean;
        least: boolean;
        let: boolean;
        like: boolean;
        likely: boolean;
        may: boolean;
        me: boolean;
        might: boolean;
        most: boolean;
        must: boolean;
        my: boolean;
        neither: boolean;
        no: boolean;
        nor: boolean;
        not: boolean;
        of: boolean;
        off: boolean;
        often: boolean;
        on: boolean;
        only: boolean;
        or: boolean;
        other: boolean;
        our: boolean;
        own: boolean;
        rather: boolean;
        said: boolean;
        say: boolean;
        says: boolean;
        she: boolean;
        should: boolean;
        since: boolean;
        so: boolean;
        some: boolean;
        than: boolean;
        that: boolean;
        the: boolean;
        their: boolean;
        them: boolean;
        then: boolean;
        there: boolean;
        these: boolean;
        they: boolean;
        this: boolean;
        tis: boolean;
        to: boolean;
        too: boolean;
        twas: boolean;
        us: boolean;
        wants: boolean;
        was: boolean;
        we: boolean;
        were: boolean;
        what: boolean;
        when: boolean;
        where: boolean;
        which: boolean;
        while: boolean;
        who: boolean;
        whom: boolean;
        why: boolean;
        will: boolean;
        with: boolean;
        would: boolean;
        yet: boolean;
        you: boolean;
        your: boolean;
    };

    const prototype: {
    };

    const version: string;

    function addStopWords(words: any): void;

    function clearStopWords(): void;

    function resetStopWords(): void;

    function stemmer(w: any): any;

    function stopWordFilter(token: any): any;

    function tokenizer(str: any, ...args: any[]): any;

    function trimmer(token: any): any;
    
}
//     namespace Configuration {
//         namespace prototype {
//             function addAllFields2UserConfig(bool: any, expand: any, fields: any): void;

//             function buildDefaultConfig(fields: any): void;

//             function buildUserConfig(config: any, fields: any): void;

//             function get(): any;

//             function reset(): void;

//             namespace addAllFields2UserConfig {
//                 const prototype: {
//                 };

//             }

//             namespace buildDefaultConfig {
//                 const prototype: {
//                 };

//             }

//             namespace buildUserConfig {
//                 const prototype: {
//                 };

//             }

//             namespace get {
//                 const prototype: {
//                 };

//             }

//             namespace reset {
//                 const prototype: {
//                 };

//             }

//         }

//     }

//     namespace DocumentStore {
//         namespace load {
//             const prototype: {
//             };

//         }

//         namespace prototype {
//             function addDoc(docRef: any, doc: any): void;

//             function addFieldLength(docRef: any, fieldName: any, length: any): void;

//             function getDoc(docRef: any): any;

//             function getFieldLength(docRef: any, fieldName: any): any;

//             function hasDoc(docRef: any): any;

//             function isDocStored(): any;

//             function removeDoc(docRef: any): void;

//             function toJSON(): any;

//             function updateFieldLength(docRef: any, fieldName: any, length: any): void;

//             namespace addDoc {
//                 const prototype: {
//                 };

//             }

//             namespace addFieldLength {
//                 const prototype: {
//                 };

//             }

//             namespace getDoc {
//                 const prototype: {
//                 };

//             }

//             namespace getFieldLength {
//                 const prototype: {
//                 };

//             }

//             namespace hasDoc {
//                 const prototype: {
//                 };

//             }

//             namespace isDocStored {
//                 const prototype: {
//                 };

//             }

//             namespace removeDoc {
//                 const prototype: {
//                 };

//             }

//             namespace toJSON {
//                 const prototype: {
//                 };

//             }

//             namespace updateFieldLength {
//                 const prototype: {
//                 };

//             }

//         }

//     }

//     namespace EventEmitter {
//         namespace prototype {
//             function addListener(...args: any[]): void;

//             function emit(name: any, ...args: any[]): void;

//             function hasHandler(name: any): any;

//             function removeListener(name: any, fn: any): void;

//             namespace addListener {
//                 const prototype: {
//                 };

//             }

//             namespace emit {
//                 const prototype: {
//                 };

//             }

//             namespace hasHandler {
//                 const prototype: {
//                 };

//             }

//             namespace removeListener {
//                 const prototype: {
//                 };

//             }

//         }

//     }

//     namespace Index {
//         namespace load {
//             const prototype: {
//             };

//         }

//         namespace prototype {
//             function addDoc(doc: any, emitEvent: any): void;

//             function addField(fieldName: any): any;

//             function coordNorm(scores: any, docTokens: any, n: any): any;

//             function fieldSearch(queryTokens: any, fieldName: any, config: any): any;

//             function fieldSearchStats(docTokens: any, token: any, docs: any): void;

//             function getFields(): any;

//             function idf(term: any, field: any): any;

//             function mergeScores(accumScores: any, scores: any, op: any): any;

//             function off(name: any, fn: any): any;

//             function on(...args: any[]): any;

//             function removeDoc(doc: any, emitEvent: any): void;

//             function removeDocByRef(docRef: any, emitEvent: any): void;

//             function saveDocument(save: any): any;

//             function search(query: any, userConfig: any): any;

//             function setRef(refName: any): any;

//             function toJSON(): any;

//             function updateDoc(doc: any, emitEvent: any): void;

//             function use(plugin: any, ...args: any[]): void;

//             namespace addDoc {
//                 const prototype: {
//                 };

//             }

//             namespace addField {
//                 const prototype: {
//                 };

//             }

//             namespace coordNorm {
//                 const prototype: {
//                 };

//             }

//             namespace fieldSearch {
//                 const prototype: {
//                 };

//             }

//             namespace fieldSearchStats {
//                 const prototype: {
//                 };

//             }

//             namespace getFields {
//                 const prototype: {
//                 };

//             }

//             namespace idf {
//                 const prototype: {
//                 };

//             }

//             namespace mergeScores {
//                 const prototype: {
//                 };

//             }

//             namespace off {
//                 const prototype: {
//                 };

//             }

//             namespace on {
//                 const prototype: {
//                 };

//             }

//             namespace removeDoc {
//                 const prototype: {
//                 };

//             }

//             namespace removeDocByRef {
//                 const prototype: {
//                 };

//             }

//             namespace saveDocument {
//                 const prototype: {
//                 };

//             }

//             namespace search {
//                 const prototype: {
//                 };

//             }

//             namespace setRef {
//                 const prototype: {
//                 };

//             }

//             namespace toJSON {
//                 const prototype: {
//                 };

//             }

//             namespace updateDoc {
//                 const prototype: {
//                 };

//             }

//             namespace use {
//                 const prototype: {
//                 };

//             }

//         }

//     }

//     namespace InvertedIndex {
//         namespace load {
//             const prototype: {
//             };

//         }

//         namespace prototype {
//             function addToken(token: any, tokenInfo: any, root: any): void;

//             function expandToken(token: any, memo: any, root: any): any;

//             function getDocFreq(token: any): any;

//             function getDocs(token: any): any;

//             function getNode(token: any): any;

//             function getTermFrequency(token: any, docRef: any): any;

//             function hasToken(token: any): any;

//             function removeToken(token: any, ref: any): void;

//             function toJSON(): any;

//             namespace addToken {
//                 const prototype: {
//                 };

//             }

//             namespace expandToken {
//                 const prototype: {
//                 };

//             }

//             namespace getDocFreq {
//                 const prototype: {
//                 };

//             }

//             namespace getDocs {
//                 const prototype: {
//                 };

//             }

//             namespace getNode {
//                 const prototype: {
//                 };

//             }

//             namespace getTermFrequency {
//                 const prototype: {
//                 };

//             }

//             namespace hasToken {
//                 const prototype: {
//                 };

//             }

//             namespace removeToken {
//                 const prototype: {
//                 };

//             }

//             namespace toJSON {
//                 const prototype: {
//                 };

//             }

//         }

//     }

//     namespace Pipeline {
//         namespace getRegisteredFunction {
//             const prototype: {
//             };

//         }

//         namespace load {
//             const prototype: {
//             };

//         }

//         namespace prototype {
//             function add(...args: any[]): void;

//             function after(existingFn: any, newFn: any): void;

//             function before(existingFn: any, newFn: any): void;

//             function get(): any;

//             function remove(fn: any): void;

//             function reset(): void;

//             function run(tokens: any): any;

//             function toJSON(): any;

//             namespace add {
//                 const prototype: {
//                 };

//             }

//             namespace after {
//                 const prototype: {
//                 };

//             }

//             namespace before {
//                 const prototype: {
//                 };

//             }

//             namespace get {
//                 const prototype: {
//                 };

//             }

//             namespace remove {
//                 const prototype: {
//                 };

//             }

//             namespace reset {
//                 const prototype: {
//                 };

//             }

//             namespace run {
//                 const prototype: {
//                 };

//             }

//             namespace toJSON {
//                 const prototype: {
//                 };

//             }

//         }

//         namespace registerFunction {
//             const prototype: {
//             };

//         }

//         namespace registeredFunctions {
//             function stemmer(w: any): any;

//             function stopWordFilter(token: any): any;

//             function trimmer(token: any): any;

//             namespace stemmer {
//                 const label: string;

//                 const prototype: {
//                 };

//             }

//             namespace stopWordFilter {
//                 const label: string;

//                 const prototype: {
//                 };

//                 const stopWords: {
//                     "": boolean;
//                     a: boolean;
//                     able: boolean;
//                     about: boolean;
//                     across: boolean;
//                     after: boolean;
//                     all: boolean;
//                     almost: boolean;
//                     also: boolean;
//                     am: boolean;
//                     among: boolean;
//                     an: boolean;
//                     and: boolean;
//                     any: boolean;
//                     are: boolean;
//                     as: boolean;
//                     at: boolean;
//                     be: boolean;
//                     because: boolean;
//                     been: boolean;
//                     but: boolean;
//                     by: boolean;
//                     can: boolean;
//                     cannot: boolean;
//                     could: boolean;
//                     dear: boolean;
//                     did: boolean;
//                     do: boolean;
//                     does: boolean;
//                     either: boolean;
//                     else: boolean;
//                     ever: boolean;
//                     every: boolean;
//                     for: boolean;
//                     from: boolean;
//                     get: boolean;
//                     got: boolean;
//                     had: boolean;
//                     has: boolean;
//                     have: boolean;
//                     he: boolean;
//                     her: boolean;
//                     hers: boolean;
//                     him: boolean;
//                     his: boolean;
//                     how: boolean;
//                     however: boolean;
//                     i: boolean;
//                     if: boolean;
//                     in: boolean;
//                     into: boolean;
//                     is: boolean;
//                     it: boolean;
//                     its: boolean;
//                     just: boolean;
//                     least: boolean;
//                     let: boolean;
//                     like: boolean;
//                     likely: boolean;
//                     may: boolean;
//                     me: boolean;
//                     might: boolean;
//                     most: boolean;
//                     must: boolean;
//                     my: boolean;
//                     neither: boolean;
//                     no: boolean;
//                     nor: boolean;
//                     not: boolean;
//                     of: boolean;
//                     off: boolean;
//                     often: boolean;
//                     on: boolean;
//                     only: boolean;
//                     or: boolean;
//                     other: boolean;
//                     our: boolean;
//                     own: boolean;
//                     rather: boolean;
//                     said: boolean;
//                     say: boolean;
//                     says: boolean;
//                     she: boolean;
//                     should: boolean;
//                     since: boolean;
//                     so: boolean;
//                     some: boolean;
//                     than: boolean;
//                     that: boolean;
//                     the: boolean;
//                     their: boolean;
//                     them: boolean;
//                     then: boolean;
//                     there: boolean;
//                     these: boolean;
//                     they: boolean;
//                     this: boolean;
//                     tis: boolean;
//                     to: boolean;
//                     too: boolean;
//                     twas: boolean;
//                     us: boolean;
//                     wants: boolean;
//                     was: boolean;
//                     we: boolean;
//                     were: boolean;
//                     what: boolean;
//                     when: boolean;
//                     where: boolean;
//                     which: boolean;
//                     while: boolean;
//                     who: boolean;
//                     whom: boolean;
//                     why: boolean;
//                     will: boolean;
//                     with: boolean;
//                     would: boolean;
//                     yet: boolean;
//                     you: boolean;
//                     your: boolean;
//                 };

//             }

//             namespace trimmer {
//                 const label: string;

//                 const prototype: {
//                 };

//             }

//         }

//         namespace warnIfFunctionNotRegistered {
//             const prototype: {
//             };

//         }

//     }

//     namespace SortedSet {
//         namespace load {
//             const prototype: {
//             };

//         }

//         namespace prototype {
//             function add(...args: any[]): void;

//             function clone(): any;

//             function forEach(fn: any, ctx: any): any;

//             function indexOf(elem: any): any;

//             function intersect(otherSet: any): any;

//             function locationFor(elem: any): any;

//             function map(fn: any, ctx: any): any;

//             function toArray(): any;

//             function toJSON(): any;

//             function union(otherSet: any): any;

//             namespace add {
//                 const prototype: {
//                 };

//             }

//             namespace clone {
//                 const prototype: {
//                 };

//             }

//             namespace forEach {
//                 const prototype: {
//                 };

//             }

//             namespace indexOf {
//                 const prototype: {
//                 };

//             }

//             namespace intersect {
//                 const prototype: {
//                 };

//             }

//             namespace locationFor {
//                 const prototype: {
//                 };

//             }

//             namespace map {
//                 const prototype: {
//                 };

//             }

//             namespace toArray {
//                 const prototype: {
//                 };

//             }

//             namespace toJSON {
//                 const prototype: {
//                 };

//             }

//             namespace union {
//                 const prototype: {
//                 };

//             }

//         }

//     }

//     namespace addStopWords {
//         const prototype: {
//         };

//     }

//     namespace clearStopWords {
//         const prototype: {
//         };

//     }

//     namespace resetStopWords {
//         const prototype: {
//         };

//     }

//     namespace stemmer {
//         const label: string;

//         const prototype: {
//         };

//     }

//     namespace stopWordFilter {
//         const label: string;

//         const prototype: {
//         };

//         const stopWords: {
//             "": boolean;
//             a: boolean;
//             able: boolean;
//             about: boolean;
//             across: boolean;
//             after: boolean;
//             all: boolean;
//             almost: boolean;
//             also: boolean;
//             am: boolean;
//             among: boolean;
//             an: boolean;
//             and: boolean;
//             any: boolean;
//             are: boolean;
//             as: boolean;
//             at: boolean;
//             be: boolean;
//             because: boolean;
//             been: boolean;
//             but: boolean;
//             by: boolean;
//             can: boolean;
//             cannot: boolean;
//             could: boolean;
//             dear: boolean;
//             did: boolean;
//             do: boolean;
//             does: boolean;
//             either: boolean;
//             else: boolean;
//             ever: boolean;
//             every: boolean;
//             for: boolean;
//             from: boolean;
//             get: boolean;
//             got: boolean;
//             had: boolean;
//             has: boolean;
//             have: boolean;
//             he: boolean;
//             her: boolean;
//             hers: boolean;
//             him: boolean;
//             his: boolean;
//             how: boolean;
//             however: boolean;
//             i: boolean;
//             if: boolean;
//             in: boolean;
//             into: boolean;
//             is: boolean;
//             it: boolean;
//             its: boolean;
//             just: boolean;
//             least: boolean;
//             let: boolean;
//             like: boolean;
//             likely: boolean;
//             may: boolean;
//             me: boolean;
//             might: boolean;
//             most: boolean;
//             must: boolean;
//             my: boolean;
//             neither: boolean;
//             no: boolean;
//             nor: boolean;
//             not: boolean;
//             of: boolean;
//             off: boolean;
//             often: boolean;
//             on: boolean;
//             only: boolean;
//             or: boolean;
//             other: boolean;
//             our: boolean;
//             own: boolean;
//             rather: boolean;
//             said: boolean;
//             say: boolean;
//             says: boolean;
//             she: boolean;
//             should: boolean;
//             since: boolean;
//             so: boolean;
//             some: boolean;
//             than: boolean;
//             that: boolean;
//             the: boolean;
//             their: boolean;
//             them: boolean;
//             then: boolean;
//             there: boolean;
//             these: boolean;
//             they: boolean;
//             this: boolean;
//             tis: boolean;
//             to: boolean;
//             too: boolean;
//             twas: boolean;
//             us: boolean;
//             wants: boolean;
//             was: boolean;
//             we: boolean;
//             were: boolean;
//             what: boolean;
//             when: boolean;
//             where: boolean;
//             which: boolean;
//             while: boolean;
//             who: boolean;
//             whom: boolean;
//             why: boolean;
//             will: boolean;
//             with: boolean;
//             would: boolean;
//             yet: boolean;
//             you: boolean;
//             your: boolean;
//         };

//     }

//     namespace tokenizer {
//         const defaultSeperator: RegExp;

//         const prototype: {
//         };

//         const seperator: RegExp;

//         function getSeperator(): any;

//         function resetSeperator(): void;

//         function setSeperator(sep: any): void;

//         namespace getSeperator {
//             const prototype: {
//             };

//         }

//         namespace resetSeperator {
//             const prototype: {
//             };

//         }

//         namespace setSeperator {
//             const prototype: {
//             };

//         }

//     }

//     namespace trimmer {
//         const label: string;

//         const prototype: {
//         };

//     }

//     namespace utils {
//         function toString(obj: any): any;

//         function warn(message: any): void;

//         namespace toString {
//             const prototype: {
//             };

//         }

//         namespace warn {
//             const prototype: {
//             };

//         }

//     }

// }

