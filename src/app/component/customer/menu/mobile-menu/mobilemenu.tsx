import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  categoryAdminStore,
  companyAdminStore,
} from '../../../../../use-selector';
import { useAppSelector } from '../../../../hooks';

function Mobilemenu() {
  const [productkey, setProductkey] = useState('' as string | null);
  const history = useNavigate();
  const categoryTrees = useAppSelector(categoryAdminStore);
  const [selected, setSelected] = useState([] as any);
  const [selectedComBo, setSelectedCombo] = useState([] as any);
  const changeSelect = (id: number, idChild?: number) => {
    const selectCopy = selected;
    const indexValue = selectCopy?.findIndex(
      (val: any, idx: any) => val.id === id,
    );
    console.log(indexValue);
    if (indexValue >= 0) {
      const newArr = selectCopy?.filter((val: any, idx: any) => id !== val.id);
      setSelected([...newArr]);
      return;
    }
    selectCopy.push({ id, idChild });
    setSelected([...selectCopy]);
  };

  const changeSelectedComBo = (id: number, idChild?: number) => {
    const selectCopy = selected;
    const indexValue = selectCopy?.findIndex(
      (val: any, idx: any) => val.id === id,
    );
    console.log(indexValue);
    if (indexValue >= 0) {
      const newArr = selectCopy?.filter((val: any, idx: any) => id !== val.id);
      setSelectedCombo([...newArr]);
      return;
    }
    selectCopy.push({ id, idChild });
    setSelectedCombo([...selectCopy]);
  };

  const closeMenuMobile = (id?: any,  router?: string) => {
    document.body.classList.remove('mmenu-active');
    if (id) {
      return history(router + id);
    }
  };
  return (
    <div>
      <div
        className="mobile-menu-overlay"
        onClick={() => document.body.classList.remove('mmenu-active')}
      ></div>

      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span
            className="mobile-menu-close"
            onClick={() => document.body.classList.remove('mmenu-active')}
          >
            <i className="fa-solid fa-align-justify"></i>
          </span>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              history('/searchproduct/' + `${productkey}`);
            }}
            className="mobile-search"
          >
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Tìm kiếm sản phẩm ..."
              onChange={(e) => {
                console.log(e.target.value);
                setProductkey(e.target.value ? e.target.value : null);
              }}
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Danh mục sản phẩm
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul
                  className="mobile-menu"
                  // onClick={() => document.body.classList.remove('mmenu-active')}
                >
                  <li
                    className="active close-menu-mobile"
                    onClick={closeMenuMobile}
                  >
                    <a href="/">Trang chủ</a>
                  </li>
                  <li className="active" onClick={closeMenuMobile}>
                    <Link to={'/introduce'}>Giới thiệu</Link>
                  </li>
                  <li className="active" onClick={closeMenuMobile}>
                    <Link to={'/buildcustomer'}>Xây dựng sản phẩm</Link>
                  </li>
                  <li style={{ fontWeight: 500, cursor: 'none' }}>
                    <a>SẢN PHẨM</a>
                  </li>

                  {categoryTrees.listcategoryProduct?.map((val, idx) =>
                    val.children?.length > 0 ? (
                      <li>
                        <a
                          className="sf-with-ul"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                          }}
                        >
                          <span onClick={() => closeMenuMobile(val.id, 'danhmucproduct/')}>
                            {val.name}
                          </span>
                          {val.children?.length > 0 && (
                            <span onClick={() => changeSelect(val.id)}>
                              {selected.some((e: any) => e.id === val.id) ? (
                                <i className="fa-solid fa-angle-down"></i>
                              ) : (
                                <i className="fa-solid fa-angle-right"></i>
                              )}
                            </span>
                          )}
                        </a>
                        {val.children?.length > 0
                          ? val.children?.map((val2, idx) => (
                              <ul
                                style={{
                                  display: selected.some(
                                    (e: any) => e.id === val.id,
                                  )
                                    ? 'block'
                                    : 'none',
                                }}
                              >
                                <li>
                                  <a
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                    }}
                                  >
                                    <span
                                      onClick={() => closeMenuMobile(val2.id, 'danhmucproduct/')}
                                    >
                                      {val2.name}
                                    </span>
                                    {val2.children?.length > 0 && (
                                      <span
                                        onClick={() => changeSelect(val2.id)}
                                      >
                                        {selected.some(
                                          (e: any) => e.id === val2.id,
                                        ) ? (
                                          <i className="fa-solid fa-angle-down"></i>
                                        ) : (
                                          <i className="fa-solid fa-angle-right"></i>
                                        )}
                                      </span>
                                    )}
                                  </a>
                                  {val2.children?.length > 0 ? (
                                    <ul
                                      style={{
                                        display: selected.some(
                                          (e: any) => e.id === val2.id,
                                        )
                                          ? 'block'
                                          : 'none',
                                      }}
                                    >
                                      {val2.children?.map((val3, idx) => (
                                        <li>
                                          <Link
                                            to={`danhmucproduct/${val3.id}`}
                                            style={{
                                              display: 'flex',
                                              justifyContent: 'space-between',
                                            }}
                                            onClick={closeMenuMobile}
                                          >
                                            {val3.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </li>
                              </ul>
                            ))
                          : null}
                      </li>
                    ) : (
                      <li>
                        <Link to={`danhmucproduct/${val.id}`}>{val.name}</Link>
                      </li>
                    ),
                  )}

                  <li style={{ fontWeight: 500, cursor: 'none' }}>
                    <a>COMBO</a>
                  </li>

                  {categoryTrees.listcategoryCombo?.map((val, idx) =>
                    val.children?.length > 0 ? (
                      <li>
                        <a
                          className="sf-with-ul"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                          }}
                        >
                          <span onClick={() => closeMenuMobile(val.id, 'danhmuccombo/')}>
                            {val.name}
                          </span>
                          {val.children?.length > 0 && (
                            <span onClick={() => changeSelectedComBo(val.id)}>
                              {selectedComBo.some((e: any) => e.id === val.id) ? (
                                <i className="fa-solid fa-angle-down"></i>
                              ) : (
                                <i className="fa-solid fa-angle-right"></i>
                              )}
                            </span>
                          )}
                        </a>
                        {val.children?.length > 0
                          ? val.children?.map((val2, idx) => (
                              <ul
                                style={{
                                  display: selectedComBo.some(
                                    (e: any) => e.id === val.id,
                                  )
                                    ? 'block'
                                    : 'none',
                                }}
                              >
                                <li>
                                  
                                  <a
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                    }}
                                  >
                                    <span
                                      onClick={() => closeMenuMobile(val2.id, 'danhmuccombo/')}
                                    >
                                      {val2.name}
                                    </span>
                                    {val2.children?.length > 0 && (
                                      <span
                                        onClick={() => changeSelectedComBo(val2.id)}
                                      >
                                        {selectedComBo.some(
                                          (e: any) => e.id === val2.id,
                                        ) ? (
                                          <i className="fa-solid fa-angle-down"></i>
                                        ) : (
                                          <i className="fa-solid fa-angle-right"></i>
                                        )}
                                      </span>
                                    )}
                                  </a>
                                  {val2.children?.length > 0 ? (
                                    <ul
                                      style={{
                                        display: selectedComBo.some(
                                          (e: any) => e.id === val2.id,
                                        )
                                          ? 'block'
                                          : 'none',
                                      }}
                                    >
                                      {val2.children?.map((val3, idx) => (
                                        <li>
                                          <Link to={`danhmuccombo/${val3.id}`}>
                                            {val3.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </li>
                              </ul>
                            ))
                          : null}
                      </li>
                    ) : (
                      <li>
                        <Link to={`danhmuccombo/${val.id}`}>{val.name}</Link>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilemenu;
