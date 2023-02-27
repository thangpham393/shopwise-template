// Loading page
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

/* begin Search Button Click */
var btnSearch = {
  btn_search: document.querySelector(".button__search"),
  btn_close: document.querySelector(".close__icon"),
  overlay: document.querySelector(".overlay"),
  init: function () {
    this.searchBtnClick();
  },
  handleSearchClick: function () {
    this.overlay.classList.toggle("show");
    this.overlay.classList.remove("close");
  },
  handleCloseClick: function () {
    this.overlay.classList.toggle("close");
    this.overlay.classList.toggle("show");
  },
  searchBtnClick: function () {
    this.btn_search.addEventListener("click", () => this.handleSearchClick());
    this.btn_close.addEventListener("click", () => this.handleCloseClick());
  },
};
btnSearch.init();

/* end Search Button Click */

/*  begin Menu Fixed and Toggle Menu  */
var menu = {
  toggle_btn: document.querySelector(".menu-toggle"),
  init: function () {
    this.scroll();
    this.showMobileMenu();
    this.handleShowToggleMenu();
  },
  scroll: function () {
    var headerTop = document.querySelector(".navigation");
    var offsetTop = headerTop.offsetTop;
    console.log(offsetTop);
    window.addEventListener("scroll", () =>
      this.fixed(window, headerTop, offsetTop)
    );
  },
  fixed: function (window, headerTop, offsetTop) {
    if (window.scrollY >= offsetTop) {
      headerTop.classList.add("is-fixed");
    } else {
      headerTop.classList.remove("is-fixed");
    }
  },
  showMobileMenu: function () {
    var itemMenu = document.querySelectorAll(
      ".toggle__menu .toggle__menu-item"
    );

    itemMenu.forEach((element) => {
      element.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("toggle__show");
      });
    });
  },
  handleShowToggleMenu: function () {
    this.toggle_btn.addEventListener("click", () => {
      var menu = document.querySelector(".toggle__menu");
      var body = document.querySelector("body");
      this.toggle_btn.classList.toggle("fa-times");
      this.toggle_btn.classList.toggle("fa-bars");
      menu.classList.toggle("is-show");
      body.classList.toggle("toggle-overlay");
    });
  },
};

menu.init();
/* end Menu Fixed button  */

/*  begin Back to Top button  */
var btnBackToTop = {
  goTopBtn: document.querySelector(".back_to_top"),
  init: function () {
    this.scrollToTop();
  },
  trackScroll: function () {
    var scrolled = window.pageYOffset;
    var headerTop = document.querySelector(".navigation");
    var offsetTop = headerTop.offsetTop;

    if (scrolled > offsetTop) {
      this.goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < offsetTop) {
      this.goTopBtn.classList.remove("back_to_top-show");
    }
  },
  backToTop: function () {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(() => this.backToTop(), 0);
    }
  },
  scrollToTop: function () {
    window.addEventListener("scroll", () => this.trackScroll());
    this.goTopBtn.addEventListener("click", () => this.backToTop());
  },
};
btnBackToTop.init();
/* end Back to Top button  */

/* Switch language  */

var switchLanguage = {
  init: function () {
    this.selectLanguage();
  },
  selectLanguage: function () {
    var selected = document.querySelector(".selected");
    var optionsContainer = document.querySelector(".select__main");
    var optionList = document.querySelectorAll(".select__main-item");

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });
    optionList.forEach((option) => {
      option.addEventListener("click", () => {
        selected.innerHTML = option.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      });
    });
  },
};

switchLanguage.init();

/* Switch Currency  */
var switchCurrency = {
  init: function () {
    this.selectCurrency();
  },
  selectCurrency: function () {
    var selectedCurrency = document.querySelector(".select-currency");
    var currencyBox = document.querySelector(".currency-box");
    var currencyItems = document.querySelectorAll(".option-item");
    selectedCurrency.addEventListener("click", () => {
      currencyBox.classList.toggle("active");
    });
    currencyItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectedCurrency.innerHTML = item.querySelector("label").innerHTML;
        currencyBox.classList.remove("active");
      });
    });
  },
};

switchCurrency.init();
