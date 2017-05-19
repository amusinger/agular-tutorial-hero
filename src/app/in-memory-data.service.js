"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Ms. Green' },
            { id: 2, name: 'Mr. Pink' },
            { id: 3, name: 'Mr. Brown' },
            { id: 4, name: 'Mr. Blue' },
            { id: 5, name: 'Ms. Dark' },
            { id: 6, name: 'Mrs. White' },
            { id: 7, name: 'Mr. White' },
            { id: 8, name: 'Dr IQ' },
            { id: 9, name: 'Magma' },
            { id: 10, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map