import { Button, Slider } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllManufacturerAdmin } from '../../../../features/Admin/manufacturerAdnim';
import { getAllRankAdmin } from '../../../../features/Admin/rankAdnim';
import {
  manufacturerAdminStore,
  rankAdminStore,
} from '../../../../use-selector';
import { Numberformat, useAppDispatch, useAppSelector } from '../../../hooks';

interface propsFilter {
  toggleFilter: (value: any) => void;
  toggleCleanAll: () => void;
  type: 'PRODUCT' | 'COMBO';
  id_category: number;
}
function FilterProductCombo(props: propsFilter) {
  const [valueRangePrice, setValueRangePrice] = useState([0, 0] as any);
  const [valueFirm, setValueFirm] = useState(null as any);
  const [valueRank, setValueRank] = useState(null as any);
  const dispatch = useAppDispatch();

  const manufacturer = useAppSelector(manufacturerAdminStore);
  const rank = useAppSelector(rankAdminStore);
  useEffect(() => {
    if (props.type === 'PRODUCT') {
      dispatch(
        getAllRankAdmin({
          id_manufacturer: valueFirm,
          id_category: props.id_category,
        })
      );

      dispatch(
        getAllManufacturerAdmin({
          id_category: props.id_category,
          page: 0,
          noitem: 0,
          id_rank: valueRank,
        })
      );
    }
  }, [valueRank, valueFirm, props.id_category]);
  return (
    <aside className="col-lg-3 order-lg-first">
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Bộ lọc:</label>
          <a
            className="sidebar-filter-clear"
            onClick={() => {
              props.toggleCleanAll();
              setValueRank(null);
              setValueFirm(null);
              setValueRangePrice([0, 0]);
            }}
          >
            Xóa tất cả
          </a>
        </div>

        {props.type === 'PRODUCT' ? (
          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#widget-1"
                role="button"
                aria-expanded="true"
                aria-controls="widget-1"
              >
                Hãng
              </a>
            </h3>

            <div className="collapse show" id="widget-1">
              <div className="widget-body">
                <div className="filter-items filter-items-count">
                  {manufacturer.listManufacturer?.map((value) => (
                    <div className="filter-item" style={{display: value.count > 0 ? '' : 'none'}}>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={'firm-' + value.manufacturer.id}
                          checked={value.manufacturer.id === valueFirm}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={'firm-' + value.manufacturer.id}
                          onClick={() => {
                            if (value.manufacturer.id === valueFirm) {
                              setValueFirm(null);
                              props.toggleFilter({
                                rangePrice: valueRangePrice,
                                rank: valueRank,
                                manufacturer: null,
                              });
                            } else {
                              setValueFirm(value.manufacturer.id);
                              props.toggleFilter({
                                rangePrice: valueRangePrice,
                                rank: valueRank,
                                manufacturer: value.manufacturer.id,
                              });
                            }
                          }}
                        >
                          {value.manufacturer.name}
                        </label>
                      </div>
                      <span className="item-count">{value.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {props.type === 'PRODUCT' ? (
          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#widget-5"
                role="button"
                aria-expanded="true"
                aria-controls="widget-5"
              >
                Phân khúc
              </a>
            </h3>
            <div className="collapse show" id="widget-5">
              <div className="widget-body">
                <div className="filter-items filter-items-count">
                  {rank.listRank?.map((value) => (
                    <div className="filter-item" style={{display: value.count > 0 ? '' : 'none'}}>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={'rank-' + value.rank.id}
                          checked={value.rank.id === valueRank}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={'rank-' + value.rank.id}
                          onClick={() => {
                            if (value.rank.id === valueRank) {
                              setValueRank(null);
                              props.toggleFilter({
                                rangePrice: valueRangePrice,
                                rank: null,
                                manufacturer: valueFirm,
                              });
                            } else {
                              setValueRank(value.rank.id);
                              props.toggleFilter({
                                rangePrice: valueRangePrice,
                                rank: value.rank.id,
                                manufacturer: valueFirm,
                              });
                            }
                          }}
                        >
                          {value.rank.name}
                        </label>
                      </div>
                      <span className="item-count">{value.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="widget widget-collapsible">
          <div className="collapse show" id="widget-5">
            <div className="widget-body">
              <div className="filter-price">
                <div className="filter-price-text">
                  Khoảng giá:
                  <Slider
                    max={50000000}
                    min={0}
                    range
                    // onAfterChange={(value) => {
                    //   console.log(value);
                    //   setValueRangePrice(value);
                    //   props.toggleFilter({
                    //     rangePrice: value,
                    //     rank: valueRank,
                    //     manufacturer: valueFirm,
                    //   });
                    // }}
                    onChange={(value) => {
                      console.log(value);
                      setValueRangePrice(value);
                    }}
                    // defaultValue={[0, 0]}
                    value={valueRangePrice}
                    disabled={false}
                  />
                  <Button
                    onClick={() =>
                      props.toggleFilter({
                        rangePrice: valueRangePrice,
                        rank: valueRank,
                        manufacturer: valueFirm,
                      })
                    }
                  >
                    Lọc
                  </Button>
                  {/* <span id="filter-price-range"></span> */}
                  {valueRangePrice ? (
                    <>
                      {' '}
                      Từ {Numberformat(valueRangePrice[0])} đến{' '}
                      {Numberformat(valueRangePrice[1])}
                    </>
                  ) : null}
                  <br />
                  <Button
                    onClick={() => {
                      props.toggleFilter({
                        rangePrice: null,
                        rank: valueRank,
                        manufacturer: valueFirm,
                      });
                      setValueRangePrice([0, 0]);
                    }}
                  >
                    Loại bỏ
                  </Button>
                </div>

                <div id="price-slider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FilterProductCombo;
