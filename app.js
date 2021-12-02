function setAttributes(el, atrributes) {
  atrributes.forEach(function (atr) {
    el.setAttribute(atr.key, atr.value);
  });
  return el;
}
class keyValPair {
  constructor(key, val) {
    this.key = key;
    this.value = val;
  }
}
function top_Section() {
  //adding the logo
  var addImg = document.querySelector(".navbar-brand");
  innerImg = addImg.getElementsByTagName("img")[0];
  innerImg = setAttributes(innerImg, [
    new keyValPair("src", data.topSection.logo.src),
  ]);
  //adding logo end

  var noChildMenuEl = document.getElementById("noChildMenuItem");
  noChildMenuEl.classList.remove("d-none");
  noChildMenuEl.removeAttribute("id");
  data.topSection.menu.forEach(function (menuItem) {
    var tempEl = noChildMenuEl.cloneNode(true);
    console.log("children " + tempEl);
    var innerAnchor = tempEl.getElementsByTagName("a")[0];

    innerAnchor = setAttributes(innerAnchor, [
      new keyValPair("href", menuItem.link),
    ]);
    innerAnchor.innerHTML = menuItem.text;

    if (menuItem.children.length) {
      tempEl.classList.add("dropdown");
      innerAnchor.classList.add("dropdown-toggle");
      innerAnchor.classList.add("dropbtn");
      innerAnchor = setAttributes(innerAnchor, [
        new keyValPair("id", "navbarDropdownMenuLink"),
        new keyValPair("id", "navbarDropdownMenuLink"),
        new keyValPair("role", "button"),
        new keyValPair("data-bs-toggle", "dropdown"),
        new keyValPair("aria-expanded", "false"),
      ]);

      var submenus = `<ul
          class="dropdown-menu"
          aria-labelledby="navbarDropdownMenuLink"
        >`;

      menuItem.children.forEach(function (subMenu) {
        submenus +=
          `<li><a class="dropdown-item" href="` +
          subMenu.link +
          `" style="padding: 4px 0 4px 0;">` +
          subMenu.text +
          `</a></li>`;
      });
      submenus += `</ul>`;
      tempEl.innerHTML += submenus;
    }
    document.getElementsByClassName("navbar-nav")[0].appendChild(tempEl);
    // console.log(tempEl.innerHTML);
  });
  noChildMenuEl.remove();

  document
    .getElementsByClassName("request")[0]
    .append(data.topSection.menuButton.request);
  document
    .getElementsByClassName("log-in")[0]
    .append(data.topSection.menuButton.login);
}

function adminPortal() {
  document
    .getElementsByClassName("h1")[0]
    .append(data.adminPortal.heading.text);
  document
    .getElementsByClassName("h6")[0]
    .append(data.adminPortal.description.text);

  var adminList = document.getElementById("admin-portal-list-id");
  adminList.classList.remove("d-none");
  adminList.removeAttribute("id");
  data.adminPortal.listText.forEach(function (adminItem) {
    var adminTempEl = adminList.cloneNode(true);
    var innerList = adminTempEl.getElementsByTagName("a")[0];
    innerList.innerHTML = adminItem.text;
    adminList.parentElement.appendChild(adminTempEl); // adding into immediate ancestor
  });
  adminList.remove();

  // var adminList01 = document.getElementById("admin-portal-list-id-01");
  // adminList01.classList.remove("d-none");
  // adminList01.removeAttribute("id");
  // data.adminPortal.listText01.forEach(function (adminItem01) {
  //   var adminTempEl01 = adminList01.cloneNode(true);
  //   var innerList01 = adminTempEl01.getElementsByTagName("a")[0];
  //   innerList01.innerHTML = adminItem01.text;
  //   adminList01.parentElement.appendChild(adminTempEl01); // adding into immediate ancestor
  // });
  // adminList01.remove();

  var addImgAdminPortal = document.querySelector(".admin-portal-images");
  innerImgAdminPortal = addImgAdminPortal.getElementsByTagName("img")[0];
  innerImgAdminPortal = setAttributes(innerImgAdminPortal, [
    new keyValPair("src", data.adminPortal.adminPortalLogo.src),
  ]);
}

function memberPortal() {
  document
    .getElementsByClassName("member-portal-title")[0]
    .append(data.memberPortal.heading.text);
  document
    .getElementsByClassName("member-portal-description")[0]
    .append(data.memberPortal.description.text);
}

function securityPolicy() {
  document
    .getElementsByClassName("security-title")[0]
    .append(data.securityPolicySection.heading.text);
  document
    .getElementsByClassName("security-description")[0]
    .append(data.securityPolicySection.description.text);

  // document.getElementById("icon-lock-id01").classList.add("icon-lock");
  // document.getElementById("ssl").append(data.securityPolicySection.iconsDescription.text01);
  var securityPolicyEl = document.getElementById("security-policy-list-id");
  securityPolicyEl.classList.remove("d-none");
  securityPolicyEl.removeAttribute("id");
  data.securityPolicySection.columnOne.forEach(function (colOneItem) {
    var tempColOne = securityPolicyEl.cloneNode(true);
    var innerColAnchor = tempColOne.getElementsByTagName("a")[0];
    innerColAnchor.innerHTML = colOneItem.text;
    var innerColSpan = tempColOne.getElementsByTagName("span")[0];
    innerColSpan = setAttributes(innerColSpan, [
      new keyValPair("class", colOneItem.icon),
    ]);
    securityPolicyEl.parentElement.appendChild(tempColOne);
  });
  securityPolicyEl.remove();
}

function getStartedSection() {
  document
    .getElementsByClassName("get-started-title")[0]
    .append(data.getStarted.heading.text);
  document.getElementsByClassName("get-started-text-01")[0].innerHTML +=
    data.getStarted.heading.text01;
  document.getElementsByClassName("get-started-text-02")[0].innerHTML +=
    data.getStarted.heading.text02;
  var getStartedButton = document.getElementsByClassName(
    "before-request-button-text-01"
  )[0];
  getStartedButton.append(data.getStarted.downLoadButton.text01);
  getStartedButton = setAttributes(getStartedButton, [
    new keyValPair("href", data.getStarted.downLoadButton.link01),
  ]);

  var getStartedButton01 = document.getElementsByClassName(
    "before-request-button-text-02"
  )[0];
  getStartedButton01.append(data.getStarted.downLoadButton.text02);
  getStartedButton01 = setAttributes(getStartedButton01, [
    new keyValPair("href", data.getStarted.downLoadButton.link02),
  ]);

  var reqStoreButtonId = document.getElementById("req-btn");
  var reqStoreButton = document.getElementsByClassName("request-store-button");
  reqStoreButtonId.classList.remove("d-none");
  reqStoreButton[0].append(data.getStarted.requestStoreButtonText.text);
}

function quickLinksFunction() {
  document
    .getElementsByClassName("quick-links-title")[0]
    .append(data.quickLinksSection.heading.text);

  var quickLinksLeftEl = document.getElementById("qlID");
  quickLinksLeftEl.classList.remove("d-none");
  quickLinksLeftEl.removeAttribute("id");
  data.quickLinksSection.lists.forEach(function (qlMenu) {
    var tempQuickLinksLeft = quickLinksLeftEl.cloneNode(true);
    var innerAnchorQL = tempQuickLinksLeft.getElementsByTagName("a")[0];
    innerAnchorQL = setAttributes(innerAnchorQL, ["href", qlMenu.link]);
    innerAnchorQL.innerHTML = qlMenu.text;
    quickLinksLeftEl.parentElement.appendChild(tempQuickLinksLeft);
  });
  quickLinksLeftEl.remove();

  //middle section

  // document
  //   .getElementsByClassName("recent-updates-title")[0]
  //   .append(data.quickLinksSection.recentUpdates.heading.text);

  // document.querySelector(".gallery-image-01").classList.remove("d-none");
  // var addRecentUpdatesImage01 = document
  //   .querySelector(".gallery-image-01")
  //   .getElementsByTagName("img")[0];
  // addRecentUpdatesImage01 = setAttributes(addRecentUpdatesImage01, [
  //   new keyValPair(
  //     "src",
  //     data.quickLinksSection.recentUpdates.recentUpdatesImg01.src
  //   ),
  // ]);
  // document.getElementsByClassName("recentImg01")[0].innerHTML +=
  //   data.quickLinksSection.recentUpdates.recentUpdatesImg01.text;

  // var recentUpdateImagesEl = document.getElementById("img1ID");
  // recentUpdateImagesEl.classList.remove("d-none");
  // recentUpdateImagesEl.removeAttribute("id");

  // data.quickLinksSection.recentUpdates.recentUpdatesImgs.forEach(function (
  //   imgsObj
  // ) {
  //   var tempRecentUpdatesImagesEL = recentUpdateImagesEl.cloneNode(true);
  //   var innerImgRecentUpdates =
  //     tempRecentUpdatesImagesEL.getElementsByTagName("img")[0];
  //   innerImgRecentUpdates = setAttributes(innerImgRecentUpdates, [
  //     new keyValPair("class", imgsObj.icon),
  //   ]);
  //   var innerImgText = document.getElementById("recentImg01ID");
  //   innerImgText.innerHTML = imgsObj.text;
  //   recentUpdateImagesEl.parentElement.appendChild(tempRecentUpdatesImagesEL);
  // });
  // recentUpdateImagesEl.remove();
}

const getDataRecentUpdates = function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users",
    dataType: "json",
    success: function (dataRU) {
      console.log(dataRU);

      document
        .getElementsByClassName("recent-updates-title")[0]
        .append(dataRU.heading);

      document.querySelector(".gallery-image-01").classList.remove("d-none");
      var addRecentUpdatesImage01 = document
        .querySelector(".gallery-image-01")
        .getElementsByTagName("img")[0];
      addRecentUpdatesImage01 = setAttributes(addRecentUpdatesImage01, [
        new keyValPair("src", dataRU.image1.image),
      ]);
      document.getElementsByClassName("recentImg01")[0].innerHTML +=
        dataRU.image1.text;

      document.querySelector(".gallery-image-02").classList.remove("d-none");
      var addRecentUpdatesImage02 = document
        .querySelector(".gallery-image-02")
        .getElementsByTagName("img")[0];
      addRecentUpdatesImage02 = setAttributes(addRecentUpdatesImage02, [
        new keyValPair("src", dataRU.image2.image),
      ]);
      document.getElementsByClassName("recentImg02")[0].innerHTML +=
        dataRU.image2.text;
    },
  });
  console.log("Himel");
};

top_Section();
adminPortal();
memberPortal();
securityPolicy();
getStartedSection();
quickLinksFunction();
getDataRecentUpdates();
