"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _axios = _interopRequireDefault(require("axios"));

var M = _interopRequireWildcard(require("materialize-css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _vue["default"]({
  computed: {
    hasGuitars: function hasGuitars() {
      return !this.isLoading && this.guitars.length > 0;
    },
    noGuitars: function noGuitars() {
      return !this.isLoading && this.guitars.length === 0;
    }
  },
  data: function data() {
    return {
      brand: '',
      color: '',
      guitars: [// {
        //     model: 'test model',
        //     brand: 'good brand',
        //     color: ' red',
        //     year: 1987,
        // },
      ],
      isLoading: true,
      model: '',
      selectedGuitar: '',
      selectedGuitarId: 0,
      year: 0
    };
  },
  el: '#app',
  methods: {
    addGuitar: function addGuitar() {
      var _this = this;

      var guitar = {
        brand: this.brand,
        color: this.color,
        model: this.model,
        year: this.year
      };

      _axios["default"].post('/api/guitars/add', guitar).then(function () {
        _this.$refs.year.focus();

        _this.brand = '';
        _this.color = '';
        _this.model = '';
        _this.year = 0;

        _this.loadGuitars();
      })["catch"](function (error) {
        console.log(">> Error:", error);
      });
    },
    loadGuitars: function loadGuitars() {
      var _this2 = this;

      _axios["default"].get('/api/guitars/all').then(function (res) {
        _this2.isLoading = false;
        _this2.guitars = res.data;
      })["catch"](function (error) {
        console.log(">> Error:", error);
      });
    },
    deleteGuitar: function deleteGuitar(id) {
      _axios["default"]["delete"]("/api/guitars/remove/".concat(id)).then(this.loadGuitars)["catch"](function (error) {
        console.log(">> Error:", error);
      });
    },
    confirmDeleteGuitar: function confirmDeleteGuitar(id) {
      var guitar = this.guitars.find(function (guitar) {
        return guitar.is === id;
      });
      this.selectedGuitar = "".concat(guitar.year, " ").concat(guitar.brand, " ").concat(guitar.model);
      this.selectedGuitarId = guitar.id;
      var dc = this.$refs.deleteConfirm;
      var modal = M.Modal.init(dc);
      modal.open();
    }
  },
  mounted: function mounted() {
    return this.loadGuitars();
  }
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFVQSxJQUFJLGVBQUosQ0FBUTtBQUNKLEVBQUEsUUFBUSxFQUFFO0FBQ04sSUFBQSxVQURNLHdCQUNPO0FBQ1QsYUFBTyxDQUFDLEtBQUssU0FBTixJQUFtQixLQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQXNCLENBQWhEO0FBQ0gsS0FISztBQUlOLElBQUEsU0FKTSx1QkFJTTtBQUNSLGFBQU8sQ0FBQyxLQUFLLFNBQU4sSUFBbUIsS0FBSyxPQUFMLENBQWEsTUFBYixLQUF3QixDQUFsRDtBQUNIO0FBTkssR0FETjtBQVNKLEVBQUEsSUFUSSxrQkFTRztBQUNILFdBQU87QUFDSCxNQUFBLEtBQUssRUFBRSxFQURKO0FBRUgsTUFBQSxLQUFLLEVBQUUsRUFGSjtBQUdILE1BQUEsT0FBTyxFQUFFLENBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkssT0FITjtBQVdILE1BQUEsU0FBUyxFQUFFLElBWFI7QUFZSCxNQUFBLEtBQUssRUFBRSxFQVpKO0FBYUgsTUFBQSxjQUFjLEVBQUUsRUFiYjtBQWNILE1BQUEsZ0JBQWdCLEVBQUUsQ0FkZjtBQWVILE1BQUEsSUFBSSxFQUFFO0FBZkgsS0FBUDtBQWlCSCxHQTNCRztBQTRCSixFQUFBLEVBQUUsRUFBRSxNQTVCQTtBQTZCSixFQUFBLE9BQU8sRUFBRTtBQUNMLElBQUEsU0FBUyxFQUFFLHFCQUFZO0FBQUE7O0FBQ25CLFVBQU0sTUFBYyxHQUFHO0FBQ25CLFFBQUEsS0FBSyxFQUFFLEtBQUssS0FETztBQUVuQixRQUFBLEtBQUssRUFBRSxLQUFLLEtBRk87QUFHbkIsUUFBQSxLQUFLLEVBQUUsS0FBSyxLQUhPO0FBSW5CLFFBQUEsSUFBSSxFQUFFLEtBQUs7QUFKUSxPQUF2Qjs7QUFNQSx3QkFDSyxJQURMLENBQ1Usa0JBRFYsRUFDOEIsTUFEOUIsRUFFSyxJQUZMLENBRVUsWUFBTTtBQUNSLFFBQUEsS0FBSSxDQUFDLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQWhCOztBQUNBLFFBQUEsS0FBSSxDQUFDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsUUFBQSxLQUFJLENBQUMsS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFBLEtBQUksQ0FBQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUEsS0FBSSxDQUFDLElBQUwsR0FBWSxDQUFaOztBQUNBLFFBQUEsS0FBSSxDQUFDLFdBQUw7QUFDSCxPQVRMLFdBVVcsVUFBQyxLQUFELEVBQWdCO0FBQ25CLFFBQUEsT0FBTyxDQUFDLEdBQVIsY0FBeUIsS0FBekI7QUFDSCxPQVpMO0FBYUgsS0FyQkk7QUFzQkwsSUFBQSxXQXRCSyx5QkFzQlM7QUFBQTs7QUFDVix3QkFDSyxHQURMLENBQ1Msa0JBRFQsRUFFSyxJQUZMLENBRVUsVUFBQyxHQUFELEVBQVM7QUFDWCxRQUFBLE1BQUksQ0FBQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsUUFBQSxNQUFJLENBQUMsT0FBTCxHQUFlLEdBQUcsQ0FBQyxJQUFuQjtBQUNILE9BTEwsV0FNVyxVQUFDLEtBQUQsRUFBZ0I7QUFDbkIsUUFBQSxPQUFPLENBQUMsR0FBUixjQUF5QixLQUF6QjtBQUNILE9BUkw7QUFTSCxLQWhDSTtBQWlDTCxJQUFBLFlBakNLLHdCQWlDUSxFQWpDUixFQWlDb0I7QUFDckIsZ0VBQ21DLEVBRG5DLEdBRUssSUFGTCxDQUVVLEtBQUssV0FGZixXQUdXLFVBQUMsS0FBRCxFQUFnQjtBQUNuQixRQUFBLE9BQU8sQ0FBQyxHQUFSLGNBQXlCLEtBQXpCO0FBQ0gsT0FMTDtBQU1ILEtBeENJO0FBeUNMLElBQUEsbUJBekNLLCtCQXlDZSxFQXpDZixFQXlDMkI7QUFDNUIsVUFBTSxNQUFjLEdBQUcsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixVQUFDLE1BQUQ7QUFBQSxlQUFZLE1BQU0sQ0FBQyxFQUFQLEtBQWMsRUFBMUI7QUFBQSxPQUFsQixDQUF2QjtBQUNBLFdBQUssY0FBTCxhQUF5QixNQUFNLENBQUMsSUFBaEMsY0FBd0MsTUFBTSxDQUFDLEtBQS9DLGNBQXdELE1BQU0sQ0FBQyxLQUEvRDtBQUNBLFdBQUssZ0JBQUwsR0FBd0IsTUFBTSxDQUFDLEVBQS9CO0FBRUEsVUFBTSxFQUFFLEdBQUcsS0FBSyxLQUFMLENBQVcsYUFBdEI7QUFDQSxVQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBRixDQUFRLElBQVIsQ0FBYSxFQUFiLENBQWQ7QUFDQSxNQUFBLEtBQUssQ0FBQyxJQUFOO0FBQ0g7QUFqREksR0E3Qkw7QUFnRkosRUFBQSxPQWhGSSxxQkFnRk07QUFDTixXQUFPLEtBQUssV0FBTCxFQUFQO0FBQ0g7QUFsRkcsQ0FBUiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCAqIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJ1xyXG5cclxuZXhwb3J0IHR5cGUgR3VpdGFyID0ge1xyXG4gICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZ1xyXG4gICAgcmVhZG9ubHkgeWVhcjogbnVtYmVyXHJcbiAgICByZWFkb25seSBtb2RlbDogc3RyaW5nXHJcbiAgICByZWFkb25seSBicmFuZDogc3RyaW5nXHJcbiAgICByZWFkb25seSBpZD86IHN0cmluZ1xyXG59XHJcblxyXG5uZXcgVnVlKHtcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgaGFzR3VpdGFycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzTG9hZGluZyAmJiB0aGlzLmd1aXRhcnMubGVuZ3RoID4gMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9HdWl0YXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNMb2FkaW5nICYmIHRoaXMuZ3VpdGFycy5sZW5ndGggPT09IDBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnJhbmQ6ICcnLFxyXG4gICAgICAgICAgICBjb2xvcjogJycsXHJcbiAgICAgICAgICAgIGd1aXRhcnM6IFtcclxuICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtb2RlbDogJ3Rlc3QgbW9kZWwnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJyYW5kOiAnZ29vZCBicmFuZCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6ICcgcmVkJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICB5ZWFyOiAxOTg3LFxyXG4gICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgXSBhcyBHdWl0YXJbXSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlbDogJycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkR3VpdGFyOiAnJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRHdWl0YXJJZDogMCxcclxuICAgICAgICAgICAgeWVhcjogMCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWw6ICcjYXBwJyxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRHdWl0YXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3VpdGFyOiBHdWl0YXIgPSB7XHJcbiAgICAgICAgICAgICAgICBicmFuZDogdGhpcy5icmFuZCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgbW9kZWw6IHRoaXMubW9kZWwsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLnllYXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5wb3N0KCcvYXBpL2d1aXRhcnMvYWRkJywgZ3VpdGFyKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMueWVhci5mb2N1cygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmFuZCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEd1aXRhcnMoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+PiBFcnJvcjpgLCBlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkR3VpdGFycygpIHtcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoJy9hcGkvZ3VpdGFycy9hbGwnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aXRhcnMgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+PiBFcnJvcjpgLCBlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVHdWl0YXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmRlbGV0ZShgL2FwaS9ndWl0YXJzL3JlbW92ZS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLmxvYWRHdWl0YXJzKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYD4+IEVycm9yOmAsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbmZpcm1EZWxldGVHdWl0YXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICBjb25zdCBndWl0YXI6IEd1aXRhciA9IHRoaXMuZ3VpdGFycy5maW5kKChndWl0YXIpID0+IGd1aXRhci5pcyA9PT0gaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHdWl0YXIgPSBgJHtndWl0YXIueWVhcn0gJHtndWl0YXIuYnJhbmR9ICR7Z3VpdGFyLm1vZGVsfWBcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEd1aXRhcklkID0gZ3VpdGFyLmlkXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYyA9IHRoaXMuJHJlZnMuZGVsZXRlQ29uZmlybVxyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IE0uTW9kYWwuaW5pdChkYylcclxuICAgICAgICAgICAgbW9kYWwub3BlbigpXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRHdWl0YXJzKClcclxuICAgIH0sXHJcbn0pXHJcbiJdfQ==
