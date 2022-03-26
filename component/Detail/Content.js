import React from "react";

export default function Content() {
  return (
    <div className="content_wrapper">
      <div className="first_intro">
        <div className="inside-content">
          <div className="center">
            <h2>Project Introduction</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. A
                fuga error eius necessitatibus
                ratione veritatis ab natus
                perspiciatis dolorum dolores omnis
                eligendi molestias saepe,
                temporibus consequatur sint
                commodi exercitationem, vel
                impedit officia modi iste iure,
                excepturi illum? Nam temporibus
                dolor illum odio obcaecati
                voluptas totam alias, placeat
                minus quisquam in velit eius, nisi
                beatae deserunt quo voluptates
                perferendis odit! Ut?
              </p>
            </div>
          </div>
        </div>
        <div className="images-wrapper">
          <div className="double-image">
            <div className="center">
              <div>
                <img
                  src="/images/yeti2.png"
                  alt="yeti"
                />
                <div className="description">
                  Identity Design
                </div>
              </div>

              <div>
                <img
                  src="/images/yeti2.png"
                  alt="yeti"
                />
                <div className="description">
                  Identity Design
                </div>
              </div>
            </div>
          </div>
          <div className="outer-single_image">
            <div className="single-image"></div>
            <div className="description">
              Identity Design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
